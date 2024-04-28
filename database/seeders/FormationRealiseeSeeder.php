<?php

namespace Database\Seeders;

use App\Models\FormationRealisee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormationRealiseeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FormationRealisee::factory()->count(10)->create();

    }
}
