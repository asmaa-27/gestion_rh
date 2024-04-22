<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentPieceJointe extends Model
{
    use HasFactory;
    protected $fillable =["id_document","nom_fichier","chemin_fichier"];

    public function document()
    {
        return $this->belongsTo(Document::class,"id_document");
    }
}
