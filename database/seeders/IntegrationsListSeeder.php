<?php

namespace Database\Seeders;

use App\Models\Integrations\IntegrationsList;
use Illuminate\Database\Seeder;

class IntegrationsListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IntegrationsList::factory(15)->create();
    }
}
