<?php

namespace App\Repositories\Eloquent;

use App\Models\Integrations\UserIntegrations;
use App\Repositories\Interfaces\UserIntegrationsRepositoryInterface;

class UserIntegrationsRepository extends BaseRepository implements UserIntegrationsRepositoryInterface
{
    public function __construct(UserIntegrations $model)
    {
        parent::__construct($model);
    }
}
