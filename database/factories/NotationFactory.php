<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notation>
 */
class NotationFactory extends Factory
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
            'annee' => $this->faker->year(),
            'note' => $this->faker->randomFloat(2, 0, 20), // Generates a float with 2 decimal places between 0 and 20
        ];
    }
}
