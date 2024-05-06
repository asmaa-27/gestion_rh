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
        Schema::create('sold_conges', function (Blueprint $table) {
            $table->id();
            $table->string('cin');
            $table->integer('nombre_jours_conges');
            $table->timestamps();
            $table->foreign('cin')->references('cin')->on('fonctionnaires')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sold_conges');
    }
};
