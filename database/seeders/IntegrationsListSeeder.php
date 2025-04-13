<?php

namespace Database\Seeders;

use App\Models\IntegrationsList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
