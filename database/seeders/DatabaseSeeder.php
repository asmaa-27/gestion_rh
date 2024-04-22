<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $this->call([
            FonctionnaireSeeder::class,
            InformationFamilialeSeeder::class,
            ConjointSeeder::class,
            EnfantSeeder::class,
            InformationAdministrativeSeeder::class,
            InformationPrevoyanceSocialeSeeder::class,
            OrganismeRetraiteHistoriqueSeeder::class,
            OrganismePrevoyanceSocialeHistoriqueSeeder::class,
            NotationSeeder::class,
            DiplomeSeeder::class,
            MouvementSeeder::class,
            AffectationSeeder::class,
            DemandeAbsenceSeeder::class,
            SanctionSeeder::class,
            DocumentSeeder::class,
            DocumentPieceJointeSeeder::class
        ]);
    }
}
