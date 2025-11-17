<?php

namespace App\Services\Integrations\Contracts;

interface IntegrationApiClientInterface
{
    public function client();

    public function getAccountSummary(): array;

    // public function getPositions(): array;

    // public function getTransactions(): array;

    // public function testCredentials(): array;
}