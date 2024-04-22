<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diplome extends Model
{
    use HasFactory;
    protected $fillable=["id_fonctionnaire","intitule","specialite","date_obtention","etablissement"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'id_fonctionnaire');
    }
}
