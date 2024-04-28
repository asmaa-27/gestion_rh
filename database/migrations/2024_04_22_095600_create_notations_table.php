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
        Schema::create('notations', function (Blueprint $table) {
            $table->id();
            $table->string('cin');
            $table->year('annee');
            $table->decimal('note', 8, 2);
            $table->timestamps();
        $table->foreign('cin')->references('cin')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notations');
    }
};
