<?php

namespace Database\Seeders;

use App\Models\Notation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NotationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Notation::factory()->count(10)->create();
    }
}
