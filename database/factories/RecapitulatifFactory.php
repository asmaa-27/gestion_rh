<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recapitulatif>
 */
class RecapitulatifFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'structure' => $this->faker->company,
            'theme' => \App\Models\Formation::factory()->create()->theme,
            'effectif' => $this->faker->numberBetween(10, 100),
            'score' => $this->faker->numberBetween(1, 100),
        ];
    }
}
