<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sanction extends Model
{
    use HasFactory;
    protected $fillable = ["cin","date_sanction","motif","nature_sanction","sanction"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'cin');
    }
}
