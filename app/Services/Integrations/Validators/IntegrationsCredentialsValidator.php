<?php

namespace App\Services\Integrations\Validators;

use App\Services\Integrations\Exceptions\UnknownIntegrationTypeException;
use App\Services\Integrations\Exceptions\MissingCredentialException;

class IntegrationsCredentialsValidator
{
    public function validateFromConfig(string $integrationKey, array $credentials): void
    {
        $config = config("integrations.drivers.{$integrationKey}");

        if (!$config) {
            throw new UnknownIntegrationTypeException($integrationKey);
        }

        foreach ($config['fields'] as $field) {
            if (!array_key_exists($field, $credentials)) {
                throw new MissingCredentialException("Missing field: {$field}");
            }
        }
    }
}
