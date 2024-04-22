<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enfant extends Model
{
    use HasFactory;
    protected $fillable=["id_inforamtions_familiales","prenom_enfant","nom_mere","date_naissance_enfant"];

    public function informationsFamiliales(){
        return $this->belongsToMany(InformationFamiliale::class,'id_inforamtions_familiales');
    }
}
