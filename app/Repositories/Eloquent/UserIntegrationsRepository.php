<?php

namespace App\Repositories\Eloquent;

use App\Models\Integrations\UserIntegrations;
use App\Repositories\Interfaces\UserIntegrationsRepositoryInterface;
use App\Services\Integrations\DTOs\CreateUserIntegrationData;
use Illuminate\Support\Facades\Crypt;

class UserIntegrationsRepository extends BaseRepository implements UserIntegrationsRepositoryInterface
{
    public function __construct(UserIntegrations $model)
    {
        parent::__construct($model);
    }

    public function createFromDto(CreateUserIntegrationData $dto): UserIntegrations
    {
        $userIntegration = UserIntegrations::create([
            'user_id' => $dto->userId,
            'integration_key' => $dto->integrationKey,
            // encrypt credentials at rest
            // 'credentials' => Crypt::encryptString(json_encode($dto->credentials)),
            'credentials' => $dto->credentials,
            // 'status' => 'connected',
        ]);

        return $userIntegration;
    }

    public function updateFromDto(CreateUserIntegrationData $dto): UserIntegrations
    {
        $integrationId = 1;

        $userIntegration = UserIntegrations::updateOrCreate(
            [
                'user_id' => $dto->userId,
                'integration_id' => $integrationId,
                // 'credentials' => Crypt::encryptString(json_encode($dto->credentials)),
            ],
            [
                'credentials' => $dto->credentials,
                // 'status' => 'connected',
            ]
        );

        return $userIntegration;
    }

    public function updateCredentials(UserIntegrations $model, array $credentials): UserIntegrations
    {
        $model->update([
            'credentials' => Crypt::encryptString(json_encode($credentials)),
        ]);
        return $model;
    }

    public function getCredentials(UserIntegrations $model): array
    {
        return json_decode(Crypt::decryptString($model->credentials), true);
    }
}
