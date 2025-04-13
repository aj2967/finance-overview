<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (auth()->check()) {
        return Inertia::render('dashboard');
    }

    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/integrations', [\App\Http\Controllers\Integration\IntegrationsController::class, 'index'])
        ->name('integrations.index');

    Route::get('/integrations/{slug}', [\App\Http\Controllers\Integration\IntegrationsController::class, 'show'])
        ->name('integrations.show');

});
