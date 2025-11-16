<?php

namespace App\Services\Integrations;

use App\Jobs\Integrations\SyncUserIntegrationJob;
use App\Models\Integrations\UserIntegrations;
use App\Repositories\Eloquent\UserIntegrationsRepository;
use App\Repositories\Interfaces\UserIntegrationsRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Services\Integrations\DTOs\CreateUserIntegrationData;
use App\Services\Integrations\IntegrationFactory;
use App\Services\Integrations\Validators\IntegrationsCredentialsValidator;


class IntegrationService
{
    private UserIntegrationsRepositoryInterface $userIntegrationsRepo;
    private UserRepositoryInterface $userRepo;

    public function __construct(
        protected IntegrationFactory $factory,
        protected UserIntegrationsRepository $repo,
        protected IntegrationsCredentialsValidator $validator
    ) {}

    public function saveConnection(CreateUserIntegrationData $data): array
    {
        // Validate fields
        $this->validator->validateFromConfig($data->integrationKey, $data->credentials);

        // Get driver and validate credentials
        $driver = $this->factory->driverForKey($data->integrationKey);
        $driver->validateCredentials($data->credentials);

        // Save user integration
        $userIntegration = $this->repo->updateFromDto($data);

        // If driver requires immediate auth step (oauth), driver->prepareAuth can return a redirect url
        $authResult = $driver->prepareAuth($data);

        // Dispatch an initial sync
        // SyncUserIntegrationJob::dispatchNow($userIntegration);

        return ['integration' => $userIntegration, 'auth' => $authResult];
    }

    public function updateAutoSync(UserIntegrations $integration, bool $autoSync): void
    {
        $integration->update(['auto_sync' => $autoSync]);
    }

    public function updateSyncFrequency(UserIntegrations $integration, string $frequency): void
    {
        $integration->update(['sync_frequency' => $frequency]);
    }

    public function deactivate(UserIntegrations $integration): void
    {
        $integration->update(['status' => 'inactive']);
    }
}
