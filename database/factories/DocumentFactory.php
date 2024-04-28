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
            'cin' => \App\Models\Fonctionnaire::factory()->create()->cin,
            'type' => $this->faker->word,
            'nom' => $this->faker->sentence(),
            'chemin' => $this->faker->filePath(),
                ];
    }
}
