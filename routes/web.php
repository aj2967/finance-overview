<?php

use App\Http\Controllers\Integration\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Temporarily modify url to redirect guest users to login page
Route::get('/home', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard.index');
    }

    return Inertia::render('Welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/integrations.php';
