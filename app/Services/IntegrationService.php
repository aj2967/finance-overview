<?php

namespace App\Services;

use App\Models\Integrations\UserIntegrations;
use App\Models\IntegrationsList;
use App\Repositories\Interfaces\UserIntegrationsRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Illuminate\Contracts\Auth\Authenticatable;


class IntegrationService
{
    private UserIntegrationsRepositoryInterface $userIntegrationsRepo;

    private Authenticatable $user;

    public function __construct(Authenticatable $user, UserRepositoryInterface $userRepo, UserIntegrationsRepositoryInterface $userIntegrationsRepo)
    {
        $this->user = $user;
        $this->userRepo = $userRepo;
        $this->userIntegrationsRepo = $userIntegrationsRepo;
    }

    public function updateApiKey(int $integrationId, string $apiKey): void
    {
        // $users = $this->userRepo->find(auth()->id());
        $userIntegration = $this->userIntegrationsRepo->updateOrCreate(
            [
                'user_id' => $this->user->id,
                'integration_id' => $integrationId,
            ],
            [
                'type' => 'investment',
                'provider' => 'Tradin212',
                'name' => 'Trading212',
                'api_key' => $apiKey,
                'sync_frequency' => 'daily',
                'connected_at' => now(),
            ]
        );
        dd($userIntegration);
        // $integration->update(['api_key' => encrypt($apiKey)]);
    }

    public function updateAutoSync(UserIntegrations $integration, bool $autoSync): void
    {
        $integration->update(['auto_sync' => $autoSync]);
    }

    public function updateSyncFrequency(UserIntegrations $integration, string $frequency): void
    {
        $integration->update(['sync_frequency' => $frequency]);
    }

    public function syncData(UserIntegrations $integration): void
    {
        // Implementation for data sync
    }

    public function deactivate(UserIntegrations $integration): void
    {
        $integration->update(['status' => 'inactive']);
    }
}
