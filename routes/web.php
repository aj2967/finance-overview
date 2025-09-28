<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Temporarily modify url to redirect guest users to login page
Route::get('/home', function () {
    if (auth()->check()) {
        return Inertia::render('Dashboard');
    }

    return Inertia::render('Welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/integrations.php';
