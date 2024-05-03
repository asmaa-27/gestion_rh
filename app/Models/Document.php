<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $fillable=["cin","type","nom","chemin"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'cin', 'cin');
    }

}
