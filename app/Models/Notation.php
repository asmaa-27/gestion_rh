<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notation extends Model
{
    use HasFactory;
    protected $fillable=["cin","annee","note"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'cin');
    }
}
