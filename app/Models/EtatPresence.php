<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class EtatPresence extends Model
{
    use HasFactory;

    protected $fillable = ['theme', 'nbr_presence','taux_presence'];
    public function formation() {
        return $this->belongsTo(Formation::class, 'theme', "theme");
    }
}
