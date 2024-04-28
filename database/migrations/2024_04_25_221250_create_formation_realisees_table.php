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
        Schema::create('formation_realisees', function (Blueprint $table) {
            $table->id();
            $table->string('theme');
            $table->string('prestataire');
            $table->text('beneficiaires');
            $table->string('formateur');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->string('lieu_formation');
            $table->string('cin');
            $table->timestamps();
            $table->foreign('cin')->references('cin')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('theme')->references('theme')->on('formations')->cascadeOnDelete()->cascadeOnUpdate();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formation_realisees');
    }
};
