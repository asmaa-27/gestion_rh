<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemandeAbsence extends Model
{
    use HasFactory;
    protected $fillable=["id_fonctionnaire","date_depart","nombre_de_jours","nombre_a_deduire","nombre_a_ne_pas_deduire","type_d_absence","date_de_retour","remplaçant","reliquat","cumul_des_absences_de_maladie"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'id_fonctionnaire');
    }
}
