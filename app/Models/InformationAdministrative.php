<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InformationAdministrative extends Model
{
    use HasFactory;
    protected $fillable=["cin","ppr","numero_poste_budgetaire","date_recrutement","diplome_recrutement","administration_recrutement","date_titularisation","grade","anciennete_grade","echelle","anciennete_echelle","echelon","anciennete_echelon","indice","statut_administratif","situation_administrative","fin_periode_detachement","integre_apres_detachement","integre_apres_mise_disposition","affectation","fonction","poste","type_sortie","date_sortie","administration_accueil","statut_activite"];

    public function fonctionnaire(){
        return $this->belongsTo(Fonctionnaire::class,"cin");
    }
}
