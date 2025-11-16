<?php

namespace App\Services\Integrations\Exceptions;

use InvalidArgumentException;
use Throwable;

final class MissingCredentialException extends InvalidArgumentException
{
    /**
     * @var string[]
     */
    private array $missingKeys;

    /**
     * @param string[] $missingKeys
     */
    public function __construct(array $missingKeys, int $code = 0, ?Throwable $previous = null)
    {
        $this->missingKeys = $missingKeys;
        $message = 'Missing required credential(s): ' . implode(', ', $missingKeys);
        parent::__construct($message, $code, $previous);
    }

    /**
     * Get the missing credential keys.
     *
     * @return string[]
     */
    public function getMissingKeys(): array
    {
        return $this->missingKeys;
    }

    /**
     * Create exception from a single key or an array of keys.
     *
     * @param string|string[] $keys
     */
    public static function from($keys): self
    {
        $keys = is_array($keys) ? $keys : [(string) $keys];
        return new self($keys);
    }
}