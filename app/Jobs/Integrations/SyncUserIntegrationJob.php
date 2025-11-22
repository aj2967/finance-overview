<?php

namespace App\Jobs\Integrations;

use App\Models\Integrations\UserIntegrations;
use App\Repositories\Eloquent\UserIntegrationsRepository;
use App\Services\Integrations\IntegrationFactory;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SyncUserIntegrationJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(protected UserIntegrations $userIntegration)
    {
    }

    /**
     * Execute the job.
     */
    public function handle(IntegrationFactory $factory, UserIntegrationsRepository $repo): void
    {
        // Get the driver and retrive external API data
        $driver = $factory->driverForKey($this->userIntegration->integration_key);
        $result = $driver->sync($this->userIntegration);

        dd($result);

        // Save to DB
        // $repo->updateBalance($this->userIntegration, [
        //     'total_balance' => $result->totalBalance,
        //     'cash_balance' => $result->cashBalance,
        //     'invested_value' => $result->investedValue,
        // ]);

        // update model, emit events, etc.
    }
}
