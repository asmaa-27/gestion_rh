<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sanction>
 */
class SanctionFactory extends Factory
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
            'date_sanction' => $this->faker->date(),
            'motif' => $this->faker->sentence(3),
            'nature_sanction' => $this->faker->randomElement(['Avertissement', 'Suspension', 'Révocation']),
            'sanction' => $this->faker->paragraph(),
        ];
    }
}
