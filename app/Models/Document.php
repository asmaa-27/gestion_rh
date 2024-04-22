<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $fillable=["id_fonctionnaire","nom","description","sous_dossier"];

    public function fonctionnaire()
    {
        return $this->belongsTo(Fonctionnaire::class, 'id_fonctionnaire');
    }
    public function documentsPiecesJointes()
{
    return $this->hasMany(DocumentPieceJointe::class,"id_document");
}
}
