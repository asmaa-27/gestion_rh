<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InformationFamiliale extends Model
{
    use HasFactory;
    protected $fillable=["cin","nom_pere","nom_mere","situation_familiale","date_mariage","nom_conjoint","cin_conjoint","date_naissance_conjoint","fonction_conjoint","nombre_enfants"];

    public function fonctionnaire(){
        return $this->belongsTo(Fonctionnaire::class,"cin");
    }

    public function conjoints (){
        return $this->hasMany(Conjoint::class);
    }

    public function enfants(){
        return $this->hasMany(Enfant::class);
    }
}
