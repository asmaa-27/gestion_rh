<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Affectation extends Model
{
    use HasFactory;
    protected $fillable= ["cin","entite","date_affectation","poste"];
    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'cin');
    }
}
