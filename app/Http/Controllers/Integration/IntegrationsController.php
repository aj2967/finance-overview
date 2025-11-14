<?php

namespace App\Http\Controllers\Integration;

use App\Http\Controllers\Controller;
use App\Http\Requests\Integrations\IntegrationsRequest;
use App\Models\Integrations\IntegrationsList;
use App\Models\Integrations\UserIntegrations;
use App\Services\IntegrationService;
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
            ->get()
            ->toArray();

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
            'integration' => $integration,
            'userIntegration' => $userIntegration,
        ]);
    }

    public function saveConnection(IntegrationsRequest $request, string $integrationId)
    {
        try {
            $integration = IntegrationsList::findOrFail($integrationId);
            $userIntegration = $this->integrationService->updateApiKey(auth()->user(), $integration->id, $request->getApiKey());

            if (empty($userIntegration) || !($userIntegration instanceof UserIntegrations)) {
                logger()->error('Failed to create or update UserIntegration for user ID ' . auth()->id() . ' and integration ID ' . $integration->id);
                return back()->with('error', 'Failed to save connection: Unable to create or update integration record.');
            }
            
            // Trigger oauth process to connect the integration

            return back()->with('success', 'API Key updated successfully');
        } catch (Exception $e) {
            logger($e->getMessage());
            return back()->with('error', 'Failed to save connection: ' . $e->getMessage());
        }
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
