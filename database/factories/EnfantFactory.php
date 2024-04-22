<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enfant>
 */
class EnfantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_information_familiales' => \App\Models\InformationFamiliale::factory(),
            'prenom_enfant' => $this->faker->firstName,
            'nom_mere' => $this->faker->lastName,
            'date_naissance_enfant' => $this->faker->date(),
        ];
    }
}
