<?php

namespace App\Providers;

use App\Repositories\Eloquent\UserIntegrationsRepository;
use App\Repositories\Eloquent\UserRepository;
use App\Repositories\Interfaces\UserIntegrationsRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;


class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(UserIntegrationsRepositoryInterface::class, UserIntegrationsRepository::class);
    }

    public function boot()
    {
        //
    }
}
