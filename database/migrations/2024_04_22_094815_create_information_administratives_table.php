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
        Schema::create('information_administratives', function (Blueprint $table) {
            $table->id();
            $table->string('cin');
            $table->string('ppr')->nullable();
            $table->string('numero_poste_budgetaire')->nullable();
            $table->date('date_recrutement')->nullable();
            $table->string('diplome_recrutement')->nullable();
            $table->string('administration_recrutement')->nullable();
            $table->date('date_titularisation')->nullable();
            $table->string('grade')->nullable();
            $table->integer('anciennete_grade')->nullable();
            $table->string('echelle')->nullable();
            $table->integer('anciennete_echelle')->nullable();
            $table->string('echelon')->nullable();
            $table->integer('anciennete_echelon')->nullable();
            $table->string('indice')->nullable();
            $table->string('statut_administratif')->nullable();
            $table->enum('situation_administrative', ['en fonction', 'detache entrant', 'detache sortant'])->default('en fonction');
            $table->date('fin_periode_detachement')->nullable();
            $table->boolean('integre_apres_detachement')->nullable();
            $table->boolean('integre_apres_mise_disposition')->nullable();
            $table->enum('affectation', ['divisions3', 'cabinet1', 'secrétariat général2', 'cercles5', 'annexes6', 'administratives', 'service ou bureau4'])->nullable();
            $table->enum('fonction', ['chef de division', 'chef de service', 'sans fonction'])->nullable();
            $table->text('poste')->nullable();
            $table->string('type_sortie')->nullable();
            $table->date('date_sortie')->nullable();
            $table->string('administration_accueil')->nullable()->comment("L'administration ou le service d'accueil");
            $table->string('statut_activite')->nullable()->comment("Le statut d'activité du fonctionnaire (actif, inactif)");
            $table->timestamps();
            $table->foreign('cin')->references('cin')->on('fonctionnaires')->cascadeOnDelete()->cascadeOnUpdate();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('information_administratives');
    }
};
