<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Holiday;
class HolidaysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


     public function run(): void
    {
        $holidays = [
            ['name' => 'Nouvel Annee', 'date' => '2024-01-01', 'active' => true],
            ['name'=>'Aïd al-Fitr','date'=>'2024-04-10','active'=>true],
            ['name'=>'Aïd al-Adha','date'=>'2024-06-16','active'=>true],
            ['name'=>'Jour de l \' Indépendance','date'=>'2024-01-11','active'=>true],
            ['name'=>'Fête du Travail','date'=>'2024-05-01','active'=>true],
            ['name'=>'Fête du Trône','date'=>'2024-07-30','active'=>true],
            ['name'=>'Fête de l \' Indépendance','date'=>'2024-11-06','active'=>true],
            ['name'=>'Révolution du Roi et du Peuple','date'=>'2024-11-18','active'=>true]
        ];

        foreach ($holidays as $holiday) {
            DB::table('holidays')->insert([
                'name' => $holiday['name'],
                'date' => $holiday['date'],
                'active' => $holiday['active'],
            ]);
    }
}
}
