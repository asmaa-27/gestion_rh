<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InformationFamiliale>
 */
class InformationFamilialeFactory extends Factory
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
            'nom_pere' => $this->faker->lastName,
            'nom_mere' => $this->faker->lastName,
            'situation_familiale' => $this->faker->randomElement(['Célibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf(ve)']),
            'date_mariage' => $this->faker->randomElement([$this->faker->date(), null]),
            'nom_conjoint' => $this->faker->randomElement([$this->faker->name(), null]),
            'cin_conjoint' => $this->faker->randomElement([$this->faker->unique()->randomNumber(8), null]),
            'date_naissance_conjoint' => $this->faker->randomElement([$this->faker->date(), null]),
            'fonction_conjoint' => $this->faker->randomElement([$this->faker->jobTitle(), null]),
            'nombre_enfants' => $this->faker->randomElement([$this->faker->numberBetween(0, 5), null]),
        ];
    }
}
