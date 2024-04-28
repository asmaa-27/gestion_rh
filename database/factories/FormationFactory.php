<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Formation>
 */
class FormationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'domaine_formation' => $this->faker->word,
            'theme' => $this->faker->sentence,
            'structure_proposant' => $this->faker->company,
            'effectif_par_structure' => $this->faker->numberBetween(10, 100),
            'classement_par_structure' => $this->faker->numberBetween(1, 5),
        ];
    }
}
