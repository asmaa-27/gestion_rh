<?php

namespace Database\Seeders;
use App\Models\InformationAdministrative;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InformationAdministrativeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        InformationAdministrative::factory()->count(10)->create();
    }
}
