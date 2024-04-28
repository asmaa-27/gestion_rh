<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EtatPresence>
 */
class EtatPresenceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        return [
            'theme' => \App\Models\Formation::factory()->create()->theme,
            'nombre_presence' => $this->faker->numberBetween(1, 100),
            'taux_presence' => $this->faker->randomFloat(2, 0, 100),
        ];
    }
}
