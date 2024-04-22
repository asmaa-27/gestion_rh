<?php

namespace Database\Seeders;
use App\Models\DocumentPieceJointe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentPieceJointeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DocumentPieceJointe::factory()->count(10)->create();
    }
}
