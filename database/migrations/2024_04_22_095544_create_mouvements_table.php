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
        Schema::create('mouvements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_fonctionnaire');
            $table->string('administration');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->timestamps();

            $table->foreign('id_fonctionnaire')->references('id')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mouvements');
    }
};
