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
//     Route::get('/', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');

    Route::get('/integrations', [\App\Http\Controllers\Integration\IntegrationsController::class, 'index'])
        ->name('integrations.index');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
