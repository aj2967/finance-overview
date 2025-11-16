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
        $driver = $factory->driverForKey($this->userIntegration->integration_key);
        // $credentials = $repo->getCredentials($this->userIntegration);
        $driver->sync($this->userIntegration);

        // update model, emit events, etc.
    }
}
