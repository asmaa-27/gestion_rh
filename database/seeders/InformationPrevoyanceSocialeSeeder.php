<?php

namespace Database\Seeders;
use App\Models\InformationPrevoyanceSociale;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InformationPrevoyanceSocialeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        InformationPrevoyanceSociale::factory()->count(10)->create();
    }
}
