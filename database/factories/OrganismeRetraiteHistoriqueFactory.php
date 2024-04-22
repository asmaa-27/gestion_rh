<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrganismeRetraiteHistorique>
 */
class OrganismeRetraiteHistoriqueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_info_prevS' => \App\Models\InformationPrevoyanceSociale::factory(),
            'organisme_retraite' => $this->faker->randomElement(['CMR', 'RCAR']),
        ];
    }
}
