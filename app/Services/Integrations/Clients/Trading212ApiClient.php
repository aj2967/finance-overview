<?php

namespace App\Services\Integrations\Clients;

use App\Services\Integrations\Contracts\IntegrationApiClientInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class Trading212ApiClient implements IntegrationApiClientInterface
{
    protected string $baseUrl;
    protected object $credentials;
    protected Client $client;

    public function __construct(object $credentials, ?Client $client = null)
    {
        $this->baseUrl = config('services.integrations.trading212.base_url');
        $this->credentials = $credentials;
        $clientId = (string) ($this->credentials->client_id ?? '');
        $clientSecret = (string) ($this->credentials->client_secret ?? '');
        $basic = base64_encode("{$clientId}:{$clientSecret}");

        $this->client = $client ?? new Client([
            'base_uri' => rtrim($this->baseUrl, '/') . '/',
            'headers' => [
                'Accept' => 'application/json',
                'Authorization' => "Basic {$basic}",
            ],
            'http_errors' => true,
        ]);
    }

    protected function request(string $path): array
    {
        try {
            $response = $this->client->request('GET', ltrim($path, '/'));
            $body = (string) $response->getBody();
            $decoded = json_decode($body, true);
            return is_array($decoded) ? $decoded : [];
        } catch (GuzzleException $e) {
            // keep behaviour similar to previous client: bubble up or return empty array on failure
            throw $e;
        }
    }

    /**
     * Return the underlying HTTP client (keeps the interface contract)
     */
    public function client()
    {
        return $this->client;
    }

    public function getAccountSummary(): array
    {
        return $this->request('equity/account/cash');
    }

    public function getPositions(): array
    {
        return $this->request('equity/account/cash');
    }

    public function getTransactions(): array
    {
        return $this->request('equity/account/cash');
    }

    public function testCredentials(): bool
    {
        try {
            $this->getAccountSummary();
            return true;
        } catch (\Throwable $e) {
            return false;
        }
    }
}