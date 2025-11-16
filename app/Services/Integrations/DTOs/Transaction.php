<?php

namespace App\Services\Integrations\DTOs;

class Transaction
{
    public function __construct(
        public string $externalId,
        public string $symbol,
        public float $quantity,
        public float $price,
        public string $type, // buy, sell, dividend, deposit, withdrawal
        public \Carbon\Carbon $executedAt,
    ) {
    }
}
