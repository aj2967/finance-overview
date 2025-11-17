<?php

namespace App\Console\Commands\Integrations;

use App\Models\Integrations\IntegrationsList;
use Exception;
use Illuminate\Console\Command;

class AddCustomIntegration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'integrations:add-first';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            IntegrationsList::updateOrCreate(
                [
                    'id' => 1
                ],
                [
                'status' => 'active',
                'name' => 'Trading212',
                'url' => 'trading212',
                'description' => 'Trading212 is a fintech company that offers commission-free trading of stocks, ETFs, and cryptocurrencies through its mobile app and web platform.',
                'icon' => 'https://cdn.brandfetch.io/idljYeMpMH/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1696102241075',
                'category' => 'stocks',
                'tags' => ['stocks', 'ETFs', 'cryptocurrencies', 'commission-free'],
                'is_featured' => true,
            ]);

            $this->info('Custom integration added successfully.');
        } catch (Exception $e) {
            dd($e->getMessage());
        }


    }
}
