<?php

namespace Database\Seeders;

use App\Models\EtatPresence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EtatPresenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EtatPresence::factory()->count(10)->create();

    }
}
