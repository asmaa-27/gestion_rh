<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InformationPrevoyanceSociale>
 */
class InformationPrevoyanceSocialeFactory extends Factory
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
            'organisme_retraite' => $this->faker->randomElement(['CMR', 'RCAR']),
            'numero_affiliation_retraite' => $this->faker->randomNumber(5),
            'date_affiliation_retraite' => $this->faker->date(),
            'organisme_prevoyance_sociale' => $this->faker->randomElement(['Mutuelle Général', 'OMFAM', 'MGAP']),
            'numero_affiliation_cnops' => $this->faker->randomNumber(5),
            'numero_immatriculation_cnops' => $this->faker->randomNumber(5),
            'date_affiliation_cnops' => $this->faker->date(),
            'numero_affiliation_fondation_hassan_ii' => $this->faker->randomNumber(5),
            'organisme_assurance' => $this->faker->company,
            'numero_affiliation_assurance' => $this->faker->randomNumber(5),
        ];
    }
}
