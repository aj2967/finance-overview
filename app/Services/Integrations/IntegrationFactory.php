<?php
namespace App\Services\Integrations;

use App\Services\Integrations\Contracts\IntegrationDriverInterface;
use Illuminate\Support\Arr;

class IntegrationFactory
{
    public function driverForKey(string $key): IntegrationDriverInterface
    {
        $config = config("integrations.drivers.{$key}");
        if (!$config || empty($config['driver'])) {
            throw new \InvalidArgumentException("No driver configured for {$key}");
        }

        $class = $config['driver'];
        return app($class);
    }
}