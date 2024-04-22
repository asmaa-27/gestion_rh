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
        Schema::create('information_familiales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_fonctionnaire');
            $table->string('nom_pere') ;
            $table->string('nom_mere') ;
            $table->string('situation_familiale') ;
            $table->date('date_mariage')->nullable();
            $table->string('nom_conjoint')->nullable();
            $table->string('cin_conjoint')->nullable();
            $table->date('date_naissance_conjoint')->nullable();
            $table->string('fonction_conjoint')->nullable();
            $table->integer('nombre_enfants')->nullable();
            $table->timestamps();
            $table->foreign('id_fonctionnaire')->references('id')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('information_familiales');
    }
};
