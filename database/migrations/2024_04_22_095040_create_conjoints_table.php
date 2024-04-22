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
        Schema::create('conjoints', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_information_familiales');
            $table->date('date_mariage');
            $table->date('date_divorce')->nullable();
            $table->string('nom_conjoint');
            $table->string('cin_conjoint');
            $table->timestamps();
            $table->foreign('id_information_familiales')->references('id')->on('information_familiales')->cascadeOnDelete()->cascadeOnUpdate();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conjoints');
    }
};
