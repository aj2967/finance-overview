<?php

namespace App\Services\Integrations\DTOs;

final class CreateUserIntegrationData
{
    public function __construct(
        public int $userId,
        public string $integrationKey,
        public array $credentials,
    ) {}
}