<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InformationPrevoyanceSociale extends Model
{
    use HasFactory;
    protected $fillable= ["cin","organisme_retraite","numero_affiliation_retraite","date_affiliation_retraite","organisme_prevoyance_sociale","numero_affiliation_cnops","numero_immatriculation_cnops","date_affiliation_cnops","numero_affiliation_fondation_hassan_ii","organisme_assurance","numero_affiliation_assurance"];

    public function fonctionnaire(){
        return $this->belongsTo(Fonctionnaire::class,"cin");
    }

    public function organismePrevoyanceSocialeHistorique(){
        return $this->hasMany(OrganismePrevoyanceSocialeHistorique::class, 'id_info_prevS');

    }

    public function organismeRetraiteHistorique(){
        return $this->hasMany(OrganismeRetraiteHistorique::class, 'id_info_prevS');

    }
}
