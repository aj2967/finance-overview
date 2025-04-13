<?php

namespace App\Http\Controllers\Integration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IntegrationsController extends Controller
{
    public function index(Request $request)
    {
        $integrations = [];

        return Inertia::render('integrations', compact('integrations'));
    }
}
