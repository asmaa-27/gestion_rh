<?php

namespace Database\Seeders;
use App\Models\InformationFamiliale;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InformationFamilialeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        InformationFamiliale::factory()->count(10)->create();
    }
}
