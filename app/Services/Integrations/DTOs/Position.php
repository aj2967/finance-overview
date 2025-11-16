<?php

namespace App\Services\Integrations\DTOs;

class Position
{
    public function __construct(
        public string $symbol,
        public float $quantity,
        public float $averagePrice,
        public float $currentPrice,
        public string $currency,
    ) {}
}
