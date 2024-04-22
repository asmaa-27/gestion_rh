<?php

namespace Database\Seeders;

use App\Models\OrganismePrevoyanceSocialeHistorique;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganismePrevoyanceSocialeHistoriqueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OrganismePrevoyanceSocialeHistorique::factory()->count(10)->create();
    }
}
