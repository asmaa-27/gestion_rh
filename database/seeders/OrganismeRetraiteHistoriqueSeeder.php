<?php

namespace Database\Seeders;

use App\Models\OrganismeRetraiteHistorique;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganismeRetraiteHistoriqueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OrganismeRetraiteHistorique::factory()->count(10)->create();
    }
}
