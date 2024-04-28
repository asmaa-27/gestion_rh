<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fonctionnaire>
 */
class FonctionnaireFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cin' => $this->faker->unique()->regexify('[A-Za-z0-9]{10}'),
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'sexe' => $this->faker->randomElement(['Homme', 'Femme']),
            'date_naissance' => $this->faker->date(),
            'lieu_naissance' => $this->faker->city,
            'ville' => $this->faker->city,
            'quartier' => $this->faker->optional()->word,
            'rue' => $this->faker->optional()->streetName,
            'numeroRue' => $this->faker->optional()->numberBetween(1, 9999),
            'codePostal' => $this->faker->optional()->postcode,
            'telephone' => $this->faker->optional()->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'image' => $this->faker->optional()->imageUrl(),  
        ];
    }
}
