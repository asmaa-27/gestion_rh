<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fonctionnaire extends Model
{
    use HasFactory;
    protected $fillable=["cin","nom","prenom","sexe","date_naissance","lieu_naissance","ville","quartier","rue","numeroRue","codePostal","telephone","email"];

    // Definir les relation avec les autres models
    public function informationsFamiliales(){
        return $this->hasOne(InformationFamiliale::class, 'id_fonctionnaire');
    }

    public function informationsAdministratives(){
        return $this->hasOne(InformationAdministrative::class, 'id_fonctionnaire');
    }

    public function informationsPrevoyanceSociale(){
        return $this->hasOne(InformationPrevoyanceSociale::class, 'id_fonctionnaire');
    }

    public function notations (){
        return $this->hasOne(Notation::class, 'id_fonctionnaire');
    }



    public function diplomes (){
        return $this->hasMany(Diplome::class, 'id_fonctionnaire');
    }

    public function mouvements(){
        return $this->hasMany(Mouvement::class, 'id_fonctionnaire');
    }

    public function affectations(){
        return $this->hasMany(Affectation::class, 'id_fonctionnaire');
    }

    public function demandesAbsence(){
        return $this->hasMany(DemandeAbsence::class, 'id_fonctionnaire');
    }

    public function sanctions(){
        return $this->hasMany(Sanction::class, 'id_fonctionnaire');
    }

    public function documents(){
        return $this->hasMany(Document::class, 'id_fonctionnaire');
    }
}
