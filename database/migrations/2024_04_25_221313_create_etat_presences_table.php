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
        Schema::create('etat_presences', function (Blueprint $table) {
            $table->id();
            $table->string('theme',);
            $table->integer('nombre_presence');
            $table->float('taux_presence');
            $table->timestamps();
            $table->foreign('theme')->references('theme')->on('formations')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etat_presences');
    }
};
