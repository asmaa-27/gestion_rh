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
        Schema::create('organisme_retraite_historiques', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_info_prevS');
            $table->enum('organisme_retraite', ['CMR', 'RCAR'])->nullable();
            $table->timestamps();
            $table->foreign('id_info_prevS')->references('id')->on('information_prevoyance_sociales')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organisme_retraite_historiques');
    }
};
