<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Document>
 */
class DocumentFactory extends Factory
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
            'nom' => $this->faker->word,
            'description' => $this->faker->sentence(),
            'sous_dossier' => $this->faker->randomElement(['Personnel', 'Financier', 'Administratif']),
        ];
    }
}
