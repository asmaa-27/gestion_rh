<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DocumentPieceJointe>
 */
class DocumentPieceJointeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_document' => \App\Models\Document::factory(),
            'nom_fichier' => $this->faker->word,
            'chemin_fichier' => $this->faker->filePath(),
        ];
    }
}
