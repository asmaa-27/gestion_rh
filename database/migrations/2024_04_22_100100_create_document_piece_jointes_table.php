<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('document_piece_jointes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_document');
            $table->string('nom_fichier');
            $table->string('chemin_fichier');
            $table->timestamps();

            $table->foreign('id_document')->references('id')->on('documents')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('document_piece_jointes');
    }
};
