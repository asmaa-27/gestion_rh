<?php

namespace Database\Seeders;

use App\Models\Recapitulatif;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecapitulatifSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recapitulatif::factory()->count(10)->create();

    }
}
