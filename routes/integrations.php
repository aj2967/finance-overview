<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/integrations', [\App\Http\Controllers\Integration\IntegrationsController::class, 'index'])
        ->name('integrations.index');

    Route::get('/integrations/{slug}', [\App\Http\Controllers\Integration\IntegrationsController::class, 'show'])
        ->name('integrations.show');

});
