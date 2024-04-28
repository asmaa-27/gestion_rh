<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrganismePrevoyanceSocialeHistorique>
 */
class OrganismePrevoyanceSocialeHistoriqueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_info_prevS' => \App\Models\InformationPrevoyanceSociale::factory()->create()->id,
            'organisme_prevoyance_sociale' => $this->faker->randomElement(['Mutuelle Général', 'OMFAM', 'MGAP']),
        ];
    }
}
