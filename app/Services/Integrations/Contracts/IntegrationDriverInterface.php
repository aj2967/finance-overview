<?php

namespace App\Services\Integrations\Contracts;

use App\Services\Integrations\DTOs\CreateUserIntegrationData;
use App\Models\Integrations\UserIntegrations;

interface IntegrationDriverInterface
{
    // Example return types: 'oauth2' | 'api_key' | 'client_secret'
    public function authType(): string;

    // Called once user provides credentials / started connection
    public function prepareAuth(CreateUserIntegrationData $data): array;

    // For OAuth2 drivers: return redirect url or similar
    public function handleCallback(array $query): UserIntegrations;

    // Validate that credentials are sufficient & can authenticate (optional)
    public function validateCredentials(array $credentials): void;

    // Perform a sync (returns normalised DTO)
    public function sync(UserIntegrations $userIntegration): array;
}