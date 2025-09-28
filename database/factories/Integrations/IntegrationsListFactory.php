<?php

namespace Database\Factories\Integrations;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Integrations\IntegrationsList>
 */
class IntegrationsListFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'status' => $this->faker->randomElement(['active', 'inactive']),
            'name' => $this->faker->unique()->company,
            'url' => $this->faker->unique()->slug,
            'description' => $this->faker->sentence,
            'icon' => $this->faker->imageUrl(64, 64, 'business', true, 'icon'),
            'category' => $this->faker->randomElement(['general', 'bank', 'stocks', 'crypto', 'property']),
            'tags' => json_encode($this->faker->words(3)),
            'is_featured' => $this->faker->boolean,
        ];
    }

    /**
     * Custom Trading212 integration
     */
    public function customIntegration(): Factory
    {
        return $this->state(fn (array $attributes) => dd($attributes));
    }
}
