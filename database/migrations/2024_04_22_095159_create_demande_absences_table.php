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
        Schema::create('demande_absences', function (Blueprint $table) {
            $table->id();
            $table->string('cin');
            $table->date('date_depart');
            $table->integer('nombre_de_jours');
            $table->integer('nombre_a_deduire');
            $table->integer('nombre_a_ne_pas_deduire');
            $table->string('type_d_absence');
            $table->date('date_de_retour')->nullable();
            $table->string('remplaçant')->nullable();
            $table->integer('reliquat')->nullable();
            $table->integer('cumul_des_absences_de_maladie')->nullable();
            $table->string('file')->nullable();
            $table->timestamps();

            $table->foreign('cin')->references('cin')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('demande_absences');
    }
};
