<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Diplome>
 */
class DiplomeFactory extends Factory
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
            'intitule' => $this->faker->sentence(3),
            'specialite' => $this->faker->word,
            'date_obtention' => $this->faker->date(),
            'etablissement' => $this->faker->company,
        ];
    }
}
