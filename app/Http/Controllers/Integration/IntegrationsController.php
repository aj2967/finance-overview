<?php

namespace App\Http\Controllers\Integration;

use App\Http\Controllers\Controller;
use App\Http\Requests\Integrations\IntegrationsRequest;
use App\Models\Integrations\IntegrationsList;
use App\Models\Integrations\UserIntegrations;
use App\Services\Integrations\DTOs\CreateUserIntegrationData;
use App\Services\Integrations\IntegrationService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IntegrationsController extends Controller
{
    private IntegrationService $integrationService;

    public function __construct(IntegrationService $integrationService)
    {
        $this->integrationService = $integrationService;
    }

    public function index(Request $request)
    {
        $integrations = IntegrationsList::query()
            ->when(
                config('app.debug'),
                fn($query) => $query->whereIn('status', ['active', 'inactive']),
                fn($query) => $query->where('status', 'active')
            )
            ->with([
                'activeUserIntegrations' => function ($q) {
                    $q->where('user_id', auth()->id());
                }
            ])
            ->get()
            ->map(function ($integration) {
                $arr = $integration->toArray();
                $arr['is_connected'] = $integration->activeUserIntegrations !== null;

                return $arr;
            });

        return Inertia::render('integrations/Integrations', compact('integrations'));
    }

    public function show(string $slug)
    {
        // Find the integration by slug
        $integration = IntegrationsList::where('url', $slug)->firstOrFail();
        $userIntegration = UserIntegrations::where('integration_id', $integration->id)
            ->where('user_id', auth()->id())
            ->first();

        return Inertia::render('integrations/IntegrationDetailsLayout', [
            'integration' => $integration->toArray(),
            'userIntegration' => $userIntegration ? $userIntegration->toArray() : null,
        ]);
    }

    public function saveConnection(IntegrationsRequest $request, IntegrationService $integrationService)
    {
        $dto = new CreateUserIntegrationData(
            userId: $request->user()->id,
            integrationKey: $request->input('integration_key'),
            credentials: $request->input('credentials')
        );

        try {
            $result = $integrationService->saveConnection($dto);
        } catch (Exception $e) {
            dd($e->getMessage());
            return back()->withErrors(['integration' => $e->getMessage()]);
        }

        // If auth step required, handle driver result (e.g. redirect url)
        if (!empty($result['auth']['redirect'])) {;
            return redirect()->away($result['auth']['redirect']);
        }

        return back()->with('success', 'Integration saved and sync queued.');
    }

    // public function updateAutoSync(IntegrationsRequest $request, UserIntegrations $integration)
    // {
    //     $this->integrationService->updateAutoSync(
    //         $integration,
    //         $request->validated()['auto_sync']
    //     );

    //     return back()->with('success', 'Auto-sync setting updated');
    // }

    // public function updateSyncFrequency(IntegrationsRequest $request, UserIntegrations $integration)
    // {
    //     $this->integrationService->updateSyncFrequency(
    //         $integration,
    //         $request->validated()['sync_frequency']
    //     );

    //     return back()->with('success', 'Sync frequency updated');
    // }

    // public function syncNow(UserIntegrations $integration)
    // {
    //     try {
    //         $this->integrationService->syncData($integration);
    //         return back()->with('success', 'Data synced successfully');
    //     } catch (\Exception $e) {
    //         return back()->with('error', 'Sync failed: ' . $e->getMessage());
    //     }
    // }

    // public function destroy(UserIntegrations $integration)
    // {
    //     $this->integrationService->deactivate($integration);
    //     return back()->with('success', 'Integration disconnected');
    // }
}
