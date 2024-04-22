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
            'cin' => $this->faker->unique()->randomNumber(8),
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'sexe' => $this->faker->randomElement(['Homme', 'Femme']),
            'date_naissance' => $this->faker->date(),
            'lieu_naissance' => $this->faker->city,
            'ville' => $this->faker->city,
            'quartier' => $this->faker->randomElement(['Quartier 1', 'Quartier 2', 'Quartier 3']),
            'rue' => $this->faker->streetName,
            'numeroRue' => $this->faker->buildingNumber,
            'codePostal' => $this->faker->postcode,
            'telephone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
        ];
    }
}
