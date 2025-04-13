<?php

namespace App\Http\Controllers\Integration;

use App\Http\Controllers\Controller;
use App\Models\IntegrationsList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IntegrationsController extends Controller
{
    public function index(Request $request)
    {
        $integrations = IntegrationsList::query()
            ->when(
                config('app.debug'),
                fn($query) => $query->whereIn('status', ['active', 'inactive']),
                fn($query) => $query->where('status', 'active')
            )
            ->get()
            ->toArray();

        return Inertia::render('integrations', compact('integrations'));
    }

    public function show(string $slug)
    {
        // Find the integration by slug
        $integration = IntegrationsList::where('url', $slug)->firstOrFail();

        return Inertia::render('integrationDetails', [
            'integration' => $integration,
        ]);
    }
}
