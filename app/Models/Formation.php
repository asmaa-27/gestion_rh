<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;
    protected $fillable = ['domaine_formation', 'theme','structure_proposant','effectif_par_structure','classement_par_structure'];

    public function recapitulatif()
    {
        return $this->hasOne(Recapitulatif::class, 'theme', "theme" );
    }

    public function formationsRealisees()
    {
        return $this->hasMany(FormationRealisee::class, 'theme', "theme" );
    }

    public function etatsPresence()
    {
        return $this->hasOne(EtatPresence::class, 'theme', "theme" );
    }

    public function evaluations()
    {
        return $this->hasOne(Evaluation::class, 'theme', "theme" );
    }
}
