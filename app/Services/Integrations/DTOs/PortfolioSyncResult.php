<?php

namespace App\Services\Integrations\DTOs;

class PortfolioSyncResult
{
    public function __construct(
        public AccountSummary $summary,
        public array $positions,
        public array $transactions
    ) {}
}