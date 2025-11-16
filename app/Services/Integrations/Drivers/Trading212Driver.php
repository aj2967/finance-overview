<?php

namespace App\Services\Integrations\Drivers;

use App\Models\Integrations\UserIntegrations;
use App\Services\Integrations\Contracts\IntegrationDriverInterface;
use App\Services\Integrations\DTOs\CreateUserIntegrationData;
use App\Services\Integrations\Exceptions\MissingCredentialException;
use Illuminate\Support\Facades\Http;

class Trading212Driver implements IntegrationDriverInterface
{
    public function authType(): string
    {
        return 'client_secret';
    }

    public function prepareAuth(CreateUserIntegrationData $data): array
    {
        $creds = $data->credentials;

        if (empty($creds['client_id']) || empty($creds['client_secret'])) {
            throw new MissingCredentialException($creds);
        }

        // TODO: try to validate with external API
        // return tokens or meta
        return [];
    }

    public function handleCallback(array $query): UserIntegrations
    {
        throw new \BadMethodCallException('Trading212 does not implement callback flow');
    }

    public function validateCredentials(array $credentials): void
    {
        // Call Trading212 token/verify endpoint; throw on failure
        // Example:
        // $res = Http::withBasicAuth($credentials['client_id'], $credentials['client_secret'])
        //            ->get('https://api.trading212.com/v1/verify');
    }

    public function sync(UserIntegrations $userIntegration): array
    {
        // call Trading212 api using decrypted credentials
        // map into common DTO and return
        return [];
    }
}