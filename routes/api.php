<?php

use App\Http\Controllers\AffectationController;
use App\Http\Controllers\DemandeAbsenceController;
use App\Http\Controllers\DiplomeController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\FonctionnaireController;
use App\Http\Controllers\InformationAdministrativeController;
use App\Http\Controllers\InformationFamilialeController;
use App\Http\Controllers\InformationPrevoyanceSocialeController;
use App\Http\Controllers\MouvementController;
use App\Http\Controllers\NotationController;
use App\Http\Controllers\SanctionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {   return $request->user();
    });
    Route::apiResource('/fonctionnaire',  FonctionnaireController::class );

    Route::get('/fonctionnaire/{cin}/details', [FonctionnaireController::class, 'showDetailsByCin']);

    Route::apiResource('/info-administrative' ,InformationAdministrativeController::class );
    Route::apiResource('/info-familiale', InformationFamilialeController::class );
    Route::apiResource('/info-prevoyance-sociale', InformationPrevoyanceSocialeController::class );
    Route::apiResource('/affectation', AffectationController::class );
    Route::apiResource('/mouvement', MouvementController::class );
    Route::apiResource('/notation',NotationController::class);
    Route::apiResource('/diplome',DiplomeController::class);
    Route::apiResource('/sanction',SanctionController::class);
    Route::apiResource('/demande-absence',DemandeAbsenceController::class);
    Route::apiResource('/document',DocumentController::class);

});
