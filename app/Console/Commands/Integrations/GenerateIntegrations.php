<?php

namespace App\Console\Commands\Integrations;

use App\Models\Integrations\IntegrationsList;
use Database\Factories\Integrations\IntegrationsListFactory;
use DB;
use Illuminate\Console\Command;

class GenerateIntegrations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:integrations {--regenerate} {--count=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate new test integrations';
    protected int $toGenerate = 15;
    protected int $generated = 0;

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $totalDesired = (int) $this->option('count') ?: $this->toGenerate;

        if ($this->option('regenerate')) {
            $this->info('Regenerating integrations...');

            // Truncate table without foreign key constraints
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');
            IntegrationsList::truncate();
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');

            IntegrationsList::factory()->customIntegration()->create();
            $this->generated++;
        }

        $generating = $this->generated + $this->toGenerate;
        $this->line("Generating {$generating} integrations...");

        $brandUrls = IntegrationsListFactory::getBrandUrls();
        $factoryInstance = IntegrationsList::factory();
        $remainingToGenerate = $totalDesired - $this->generated;

        if ($remainingToGenerate > 0) {
            $this->info("Generating {$remainingToGenerate} integrations with API calls (1 second delay)...");
        }

        shuffle($brandUrls);
        $domainsToUse = array_slice($brandUrls, 0, $remainingToGenerate);

        foreach ($domainsToUse as $domain) {
            $this->line("Fetching data for: {$domain}");

            $brandData = $factoryInstance->fetchBrandData($domain);
            $factoryInstance->withBrandData($brandData)->create();
            $this->generated++;

            // API rate limit delay
            sleep(1);
        }

        if ($this->generated > 0) {
            $this->info("Successfully generated a total of {$this->generated} integrations.");
        } else {
            $this->info("No new integrations were generated.");
        }
    }
}
