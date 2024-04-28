<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recapitulatif extends Model
{
    use HasFactory;

    protected $fillable = ['structure', 'theme','effectif','score'];

    public function formation() {
        return $this->belongsTo(Formation::class, "theme");
    }

}
