<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InformationAdministrative>
 */
class InformationAdministrativeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_fonctionnaire' => \App\Models\Fonctionnaire::factory(),
            'ppr' => $this->faker->randomNumber(5),
            'numero_poste_budgetaire' => $this->faker->randomNumber(5),
            'date_recrutement' => $this->faker->date(),
            'diplome_recrutement' => $this->faker->randomElement(['Bac', 'Bac+2', 'Bac+3', 'Bac+5']),
            'administration_recrutement' => $this->faker->company,
            'date_titularisation' => $this->faker->date(),
            'grade' => $this->faker->randomElement(['Grade 1', 'Grade 2', 'Grade 3']),
            'anciennete_grade' => $this->faker->numberBetween(1, 10),
            'echelle' => $this->faker->randomElement(['Echelle 1', 'Echelle 2', 'Echelle 3']),
            'anciennete_echelle' => $this->faker->numberBetween(1, 10),
            'echelon' => $this->faker->randomElement(['Echelon 1', 'Echelon 2', 'Echelon 3']),
            'anciennete_echelon' => $this->faker->numberBetween(1, 10),
            'indice' => $this->faker->randomNumber(3),
            'statut_administratif' => $this->faker->randomElement(['Actif', 'Inactif']),
            'situation_administrative' => $this->faker->randomElement(['en fonction', 'detache entrant', 'detache sortant']),
            'fin_periode_detachement' => $this->faker->randomElement([$this->faker->date(), null]),
            'integre_apres_detachement' => $this->faker->boolean(),
            'integre_apres_mise_disposition' => $this->faker->boolean(),
            'affectation' => $this->faker->randomElement(['divisions3', 'cabinet1', 'secrétariat général2', 'cercles5', 'annexes6', 'administratives', 'service ou bureau4']),
            'fonction' => $this->faker->randomElement(['chef de division', 'chef de service', 'sans fonction']),
            'poste' => $this->faker->jobTitle,
            'type_sortie' => $this->faker->randomElement(['Démission', 'Licenciement', 'Retraite']),
            'date_sortie' => $this->faker->randomElement([$this->faker->date(), null]),
            'administration_accueil' => $this->faker->company,
            'statut_activite' => $this->faker->randomElement(['Actif', 'Inactif']),
        ];
    }
}
