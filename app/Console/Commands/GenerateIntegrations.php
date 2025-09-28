<?php

namespace App\Console\Commands;

use App\Models\Integrations\IntegrationsList;
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
    protected $description = 'Generate new integrations or update existing ones';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if ($this->option('regenerate')) {
            $this->info('Regenerating integrations...');
            IntegrationsList::truncate();
        }


    }
}
