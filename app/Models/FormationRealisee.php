<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormationRealisee extends Model
{
    use HasFactory;
    protected $fillable = ['theme', 'prestataire','beneficiaires','formateur','date_debut','date_fin','lieu_formation',"id_fonctionnaire"];
    public function formation()
    {
        return $this->belongsTo(Formation::class, 'theme' );
    }
    public function fonctionnaire() {
        return $this->hasMany(Fonctionnaire::class, "cin");
    }
    }

