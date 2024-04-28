<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mouvement extends Model
{
    use HasFactory;
    protected $fillable=["cin","administration","date_debut","date_fin"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'cin');
    }
}
