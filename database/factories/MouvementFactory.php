<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mouvement>
 */
class MouvementFactory extends Factory
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
            'administration' => $this->faker->company,
            'date_debut' => $this->faker->date(),
            'date_fin' => $this->faker->date(),
        ];
    }
}
