<?php

namespace App\Services\Integrations\DTOs;

class AccountSummary {
    public function __construct(
        public float $totalBalance,
        public ?float $cashBalance = null,
        public ?float $investedValue = null,
    ) {}
}