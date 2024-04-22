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
        Schema::create('information_prevoyance_sociales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_fonctionnaire');
            $table->enum('organisme_retraite', ['CMR', 'RCAR'])->nullable();
            $table->string('numero_affiliation_retraite')->nullable();
            $table->date('date_affiliation_retraite')->nullable();
            $table->enum('organisme_prevoyance_sociale', ['Mutuelle Général', 'OMFAM', 'MGAP'])->nullable();
            $table->string('numero_affiliation_cnops')->nullable();
            $table->string('numero_immatriculation_cnops')->nullable();
            $table->date('date_affiliation_cnops')->nullable();
            $table->string('numero_affiliation_fondation_hassan_ii')->nullable();
            $table->string('organisme_assurance')->nullable();
            $table->string('numero_affiliation_assurance')->nullable();
            $table->timestamps();

            $table->foreign('id_fonctionnaire')->references('id')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('information_prevoyance_sociales');
    }
};
