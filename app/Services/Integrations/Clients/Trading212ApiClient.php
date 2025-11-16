<?php

namespace App\Services\Integrations\Clients;

use App\Services\Integrations\Contracts\IntegrationApiClientInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class Trading212APIClient implements IntegrationApiClientInterface
{
    protected string $baseUrl;
    protected object $credentials;
    protected Client $client;

    public function __construct(object $credentials, ?Client $client = null)
    {
        $this->credentials = $credentials;
        $this->baseUrl = config('services.integrations.trading212.base_url');

        // allow injecting a pre-configured Guzzle client for testing; otherwise create one
        $this->client = $client ?? new Client([
            'base_uri' => rtrim($this->baseUrl, '/') . '/',
            'auth' => [
                $this->credentials->client_id ?? '',
                $this->credentials->client_secret ?? '',
            ],
            'headers' => [
                'Accept' => 'application/json',
            ],
            // let Guzzle throw exceptions for 4xx/5xx responses (default)
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
    protected function client()
    {
        return $this->client;
    }

    public function getAccountSummary(): array
    {
        return $this->request('investor/v1/accounts/summary');
    }

    public function getPositions(): array
    {
        return $this->request('investor/v1/positions');
    }

    public function getTransactions(): array
    {
        return $this->request('investor/v1/transactions');
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