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
        Schema::create('recapitulatifs', function (Blueprint $table) {
            $table->id();
            $table->string('structure');
            $table->string('theme');
            $table->integer('effectif');
            $table->integer('score');
            $table->timestamps();
            $table->foreign('theme')->references('theme')->on('formations')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recapitulatifs');
    }
};
