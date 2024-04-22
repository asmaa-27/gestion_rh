<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganismePrevoyanceSocialeHistorique extends Model
{
    use HasFactory;
    protected $fillable =["id_info_prevS","organisme_prevoyance_sociale"];

    public function informationsPrevoyanceSociale() {
        return $this->belongsTo(InformationPrevoyanceSociale::class, 'id_info_prevS');
    }
}
