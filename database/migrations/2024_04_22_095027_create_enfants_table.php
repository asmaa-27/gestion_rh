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
        Schema::create('enfants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_information_familiales');
            $table->string('prenom_enfant');
            $table->string('nom_mere');
            $table->date('date_naissance_enfant');
            $table->timestamps();
            $table->foreign('id_information_familiales')->references('id')->on('information_familiales')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enfants');
    }
};
