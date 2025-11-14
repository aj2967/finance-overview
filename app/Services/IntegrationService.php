<?php

namespace App\Services;

use App\Models\Integrations\UserIntegrations;
use App\Models\IntegrationsList;
use App\Models\User;
use App\Repositories\Interfaces\UserIntegrationsRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Illuminate\Contracts\Auth\Authenticatable;
use InvalidArgumentException;


class IntegrationService
{
    private UserIntegrationsRepositoryInterface $userIntegrationsRepo;
    private UserRepositoryInterface $userRepo;

    public function __construct(UserRepositoryInterface $userRepo, UserIntegrationsRepositoryInterface $userIntegrationsRepo)
    {
        $this->userRepo = $userRepo;
        $this->userIntegrationsRepo = $userIntegrationsRepo;
    }

    public function updateApiKey(User $user, int $integrationId, string $apiKey): UserIntegrations
    {
        if (!$user->getKey()) {
            throw new InvalidArgumentException('User not found');
        }

        return $this->userIntegrationsRepo->updateOrCreate(
            [
                'user_id' => $user->id,
                'integration_id' => $integrationId,
            ],
            [
                'api_key' => $apiKey,
                'sync_frequency' => 'daily',
                'connected_at' => now(),
            ]
        );
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
