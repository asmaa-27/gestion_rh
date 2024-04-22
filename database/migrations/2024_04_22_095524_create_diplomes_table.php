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
        Schema::create('diplomes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_fonctionnaire');
            $table->string('intitule');
            $table->string('specialite');
            $table->date('date_obtention');
            $table->string('etablissement');
            $table->timestamps();

        $table->foreign('id_fonctionnaire')->references('id')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diplomes');
    }
};
