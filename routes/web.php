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

    // Temp UI mockup routes
    Route::get('/accounts', function () {
        return Inertia::render('accounts/index');
    })->name('accounts.index');

    Route::get('/investments', function () {
        return Inertia::render('investments/index');
    })->name('investments.index');

    Route::get('/crypto', function () {
        return Inertia::render('crypto/index');
    })->name('investments.crypto');

    Route::get('/crypto/{symbol}', function ($symbol) {
        return Inertia::render('crypto/detail', ['symbol' => $symbol]);
    })->name('investments.crypto.detail');

    Route::get('/transactions', function () {
        return Inertia::render('transactions/index');
    })->name('transactions.index');

    Route::get('/goals', function () {
        return Inertia::render('goals/index');
    })->name('goals.index');

    Route::get('/goals/{slug}', function ($slug) {
        return Inertia::render('goals/detail', ['slug' => $slug]);
    })->name('goals.detail');

    Route::get('/budgets', function () {
        return Inertia::render('budgets/index');
    })->name('budgets.index');

    Route::get('/insights', function () {
        return Inertia::render('insights/index');
    })->name('insights.index');

    Route::get('/projections', function () {
        return Inertia::render('projections/index');
    })->name('projections.index');

    Route::get('/networth', function () {
        return Inertia::render('networth/index');
    })->name('networth.index');

    Route::get('/calculators', function () {
        return Inertia::render('calculators/index');
    })->name('calculators.index');

    Route::get('/wallets', function () {
        return Inertia::render('wallets/index');
    })->name('wallets.index');

    Route::get('/reports', function () {
        return Inertia::render('reports/index');
    })->name('reports.index');

    Route::get('/notifications', function () {
        return Inertia::render('notifications/index');
    })->name('notifications.index');

    Route::get('/planner', function () {
        return Inertia::render('planner/index');
    })->name('planner.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__.'/integrations.php';
