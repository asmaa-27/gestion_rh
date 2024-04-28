<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FormationRealisee>
 */
class FormationRealiseeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'theme' => \App\Models\Formation::factory()->create()->theme,
            'prestataire' => $this->faker->company,
            'beneficiaires' => $this->faker->paragraph,
            'formateur' => $this->faker->name,
            'date_debut' => $this->faker->date(),
            'date_fin' => $this->faker->date(),
            'lieu_formation' => $this->faker->city,
            'cin' => \App\Models\Fonctionnaire::factory()->create()->cin,
        ];
    }
}
