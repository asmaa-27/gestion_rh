<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notation extends Model
{
    use HasFactory;
    protected $fillable=["id_fonctionnaire","annee","note"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'id_fonctionnaire');
    }
}
