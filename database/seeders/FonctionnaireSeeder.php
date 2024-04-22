<?php

namespace Database\Seeders;
use App\Models\Fonctionnaire;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FonctionnaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Fonctionnaire::factory()->count(10)->create();
    }
}
