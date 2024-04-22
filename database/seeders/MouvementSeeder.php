<?php

namespace Database\Seeders;
use App\Models\Mouvement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MouvementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mouvement::factory()->count(10)->create();
    }
}
