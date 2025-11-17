<?php

namespace App\Console\Commands\Integrations;

use App\Models\User;
use App\Services\Integrations\IntegrationFactory;
use Illuminate\Console\Command;

class SyncIntegration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'integration:sync {userId?} {--key=trading212}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync Trading212 integration';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $integrationKey = $this->option('key') ?? 'trading212';
        $userId = $this->argument('userId');

        if ($userId) {
            $user = User::find($userId);
            if (!$user) {
                $this->error("User {$userId} not found");
                return 1;
            }
            $users = collect([$user]);
        } else {
            $users = User::cursor();
        }

        $factory = new IntegrationFactory();
        $driver = $factory->driverForKey($integrationKey);

        foreach ($users as $user) {
            $userIntegrations = $user->userIntegrations()
                ->whereHas('integration', fn($q) => $q->where('url', $integrationKey))
                ->get();

                $this->info("User {$user->id}: {$userIntegrations->count()} integration(s) found");

                foreach ($userIntegrations as $userIntegration) {
                $result = $driver->sync($userIntegration);

                dd($result);
            }
        }

        return 0;

    }
}
