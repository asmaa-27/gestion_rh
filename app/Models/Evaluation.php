<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;
    protected $fillable = ['theme', 'taux_satisfaction'];
    public function formation() {
        return $this->belongsTo(Formation::class, 'theme', "theme");
    }
}
