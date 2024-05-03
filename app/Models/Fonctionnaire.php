<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fonctionnaire extends Model
{
    use HasFactory;
    protected $fillable=["cin","nom","prenom","sexe","date_naissance","lieu_naissance","ville","quartier","rue","numeroRue","codePostal","telephone","email","image"];

    // Definir les relation avec les autres models
    public function informationsFamiliales(){
        return $this->hasOne(InformationFamiliale::class, 'cin',"cin");
    }

    public function informationsAdministratives(){
        return $this->hasOne(InformationAdministrative::class, 'cin', 'cin');
    }

    public function informationsPrevoyanceSociale(){
        return $this->hasOne(InformationPrevoyanceSociale::class, 'cin', 'cin');
    }

    public function notations (){
        return $this->hasOne(Notation::class, 'cin', 'cin');
    }

    public function formationsRealisees()
    {
        return $this->hasMany(FormationRealisee::class, 'cin', 'cin');
    }

    public function diplomes (){
        return $this->hasMany(Diplome::class, 'cin', 'cin');
    }

    public function mouvements(){
        return $this->hasMany(Mouvement::class, 'cin', 'cin');
    }

    public function affectations(){
        return $this->hasMany(Affectation::class, 'cin', 'cin');
    }

    public function demandesAbsence(){
        return $this->hasMany(DemandeAbsence::class, 'cin', 'cin');
    }

    public function sanctions(){
        return $this->hasMany(Sanction::class, 'cin', 'cin');
    }

    public function documents(){
        return $this->hasMany(Document::class, 'cin', 'cin');
    }
}
