<?php

use App\Http\Controllers\Integration\IntegrationsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->prefix('/integrations')->group(function () {
    Route::get('/', [IntegrationsController::class, 'index'])
        ->name('integrations.index');

    Route::get('{slug}', [IntegrationsController::class, 'show'])
        ->name('integrations.show');

    Route::post('{integration}/save-connection', [IntegrationsController::class, 'saveConnection'])->name('integrations.saveConnection');
    Route::patch('{integration}/auto-sync', [IntegrationsController::class, 'updateAutoSync']);
    Route::patch('{integration}/sync-frequency', [IntegrationsController::class, 'updateSyncFrequency']);
    Route::post('{integration}/sync', [IntegrationsController::class, 'syncNow']);
    Route::delete('{integration}', [IntegrationsController::class, 'destroy']);
});

