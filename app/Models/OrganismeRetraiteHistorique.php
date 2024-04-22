<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganismeRetraiteHistorique extends Model
{
    use HasFactory;
    protected $fillable=["id_info_prevS","organisme_retraite"];

    public function informationsPrevoyanceSociale(){
        return $this->belongsTo(InformationPrevoyanceSociale::class, 'id_info_prevS');
    }
}
