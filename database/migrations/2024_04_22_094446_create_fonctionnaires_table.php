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
        Schema::create('fonctionnaires', function (Blueprint $table) {
            $table->id();
            $table->string('cin');
            $table->string('nom');
            $table->string('prenom');
            $table->enum('sexe',[ 'Homme','Femme']);
            $table->date('date_naissance');
            $table->string('lieu_naissance');
            $table->string('ville');
            $table->string('quartier')->nullable();
            $table->string('rue')->nullable();
            $table->integer('numeroRue')->nullable();
            $table->string('codePostal',10)->nullable();
            $table->string('telephone',20)->nullable();
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fonctionnaires');
    }
};
