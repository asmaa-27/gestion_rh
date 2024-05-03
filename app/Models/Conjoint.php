<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conjoint extends Model
{
    use HasFactory;
    protected $fillable=["id_inforamtions_familiales","date_mariage","date_divorce","nom_conjoint","cin_conjoint"];

    public function informationsFamiliales(){
        return $this->belongsToMany(InformationFamiliale::class,'id_inforamtions_familiales','id');
}
}
