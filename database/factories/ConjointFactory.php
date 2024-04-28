<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Conjoint>
 */
class ConjointFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_information_familiales' => \App\Models\InformationFamiliale::factory()->create()->id,
            'date_mariage' => $this->faker->date(),
            'date_divorce' => $this->faker->randomElement([$this->faker->date(), null]),
            'nom_conjoint' => $this->faker->name(),
            'cin_conjoint' => $this->faker->unique()->randomNumber(8),
        ];
    }
}
