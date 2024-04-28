<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DemandeAbsence>
 */
class DemandeAbsenceFactory extends Factory
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
            'date_depart' => $this->faker->date(),
            'nombre_de_jours' => $this->faker->numberBetween(1, 10),
            'nombre_a_deduire' => $this->faker->numberBetween(1, 10),
            'nombre_a_ne_pas_deduire' => $this->faker->numberBetween(1, 10),
            'type_d_absence' => $this->faker->randomElement(['Maladie', 'Congé', 'Formation']),
            'date_de_retour' => $this->faker->date(),
            'remplaçant' => $this->faker->name,
            'reliquat' => $this->faker->numberBetween(1, 10),
            'cumul_des_absences_de_maladie' => $this->faker->numberBetween(1, 10),
        ];
    }
}
