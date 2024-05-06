<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoldConge extends Model
{
    use HasFactory;
    protected $fillable = ['cin', 'nombre_jours_conges'];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'cin','cin');
    }
}
