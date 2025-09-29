<?php

namespace Database\Factories\Integrations;

use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Integrations\IntegrationsList>
 */
class IntegrationsListFactory extends Factory
{
    protected $brandUrls = [
        'robinhood.com',
        'coinbase.com',
        'tdameritrade.com',
        'acorns.com',
        'hsbc.co.uk',
        'monzo.com',
        'barclays.co.uk',
        'chase.com',
        'nationwide.co.uk',
        'natwest.com',
        'starlingbank.com',
        'revolut.com',
        'eToro.com',
        'fidelity.com',
        'vanguard.com',
        'ally.com',
        'sofi.com',
        'wealthfront.com',
        'betterment.com',
        'merrilledge.com',
        'schwab.com',
        'interactivebrokers.com',
        'etrade.com',
        'webull.com',
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $domain = $this->faker->randomElement($this->brandUrls);

        return [
            'status' => $this->faker->randomElement(['active', 'inactive']),
            'name' => ucfirst(explode('.', $domain)[0]),
            'url' => $domain,
            'description' => $this->faker->sentence,
            'icon' => 'https://placehold.co/64x64/2563EB/ffffff?text=Icon',
            'category' => $this->faker->randomElement(['general', 'bank', 'stocks', 'crypto', 'property']),
            'tags' => json_encode($this->faker->words(3)),
            'is_featured' => false,
        ];
    }

    /**
     * State to apply pre-fetched brand data from API
     */
    public function withBrandData(array $data): Factory
    {
        return $this->state(fn($attributes) => [
            'name' => $data['name'] ?? $attributes['name'],
            'icon' => $data['icon'] ?? $attributes['icon'],
            'url' => $data['domain'],
            'category' => $this->getCategoryFromDomain($data['domain'])
        ]);
    }

    /**
     * Helper to determine category from domain
     */
    protected function getCategoryFromDomain(string $domain): string
    {
        if (str_contains($domain, 'bank') || str_contains($domain, 'nationwide') || str_contains($domain, 'natwest')) {
            return 'bank';
        }
        if (str_contains($domain, 'coinbase') || str_contains($domain, 'crypto')) {
            return 'crypto';
        }
        if (str_contains($domain, 'tdameritrade') || str_contains($domain, 'robinhood') || str_contains($domain, 'fidelity')) {
            return 'stocks';
        }
        return 'general';
    }

    /**
     * Helper to fetch brand data from Brandfetch API
     */
    public function fetchBrandData(string $domain): array
    {
        $clientId = config('services.brandfetch.client_id');
        $brandName = ucfirst(explode('.', $domain)[0]);
        $fallbackData = ['domain' => $domain, 'name' => $brandName, 'icon' => null];

        if (empty($clientId) || empty($domain)) {
            return $fallbackData;
        }

        try {
            $client = new \GuzzleHttp\Client();

            $url = "https://api.brandfetch.io/v2/search/{$domain}?c={$clientId}";
            $response = $client->get($url, [
                'headers' => [
                    // 'Accept' => 'application/json',
                    // 'Bearer' => "Bearer {$secret}",
                ],
            ]);

            if ($response->getStatusCode() === 200) {
                $data = json_decode($response->getBody()->getContents(), true);

                if (!empty($data) && is_array($data[0])) {
                    $data = $data[0];

                    return [
                        'domain' => $domain,
                        'name' => $data['name'] ?? $domain,
                        'icon' => $data['icon'] ?? null
                    ];
                }

                return $fallbackData;
            }
        } catch (Exception $e) {
            logger()->error('Brandfetch API error: ' . $e->getMessage());
            return $fallbackData;
        }

        return $fallbackData;
    }

    /**
     * Custom Trading212 integration
     */
    public function customIntegration(): Factory
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'active',
            'name' => 'Trading212',
            'url' => 'trading212',
            'description' => 'Trading212 is a fintech company that offers commission-free trading of stocks, ETFs, and cryptocurrencies through its mobile app and web platform.',
            'icon' => 'https://cdn.brandfetch.io/idljYeMpMH/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1696102241075',
            'category' => 'stocks',
            'tags' => json_encode(['stocks', 'ETFs', 'cryptocurrencies', 'commission-free']),
            'is_featured' => true,
        ]);
    }

    /**
     * Get the list of brand URLs
     */
    public static function getBrandUrls(): array
    {
        return (new static)->brandUrls;
    }
}
