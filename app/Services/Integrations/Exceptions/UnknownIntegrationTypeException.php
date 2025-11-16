<?php

namespace App\Services\Integrations\Exceptions;

use InvalidArgumentException;

final class UnknownIntegrationTypeException extends InvalidArgumentException
{
    private ?string $type;

    public function __construct(?string $type = null, int $code = 0, ?\Throwable $previous = null)
    {
        $this->type = $type;
        $message = $type === null
            ? 'Unknown integration type.'
            : sprintf('Unknown integration type: %s', $type);

        parent::__construct($message, $code, $previous);
    }

    public static function forType(string $type): self
    {
        return new self($type);
    }

    public function getType(): ?string
    {
        return $this->type;
    }
}