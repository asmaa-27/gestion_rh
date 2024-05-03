<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\InformationAdministrative;
use Illuminate\Http\Request;

class InformationAdministrativeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'cin' => 'required|exists:fonctionnaires,string',
            'ppr' => 'required|numeric', // Assuming PPR is a numeric value
            'numero_poste_budgetaire' => 'required|numeric', // Assuming Numero Poste Budgetaire is a numeric value
            'date_recrutement' => 'required|date',
            'diplome_recrutement' => 'required|string',
            'administration_recrutement' => 'required|string',
            'date_titularisation' => 'required|date',
            'grade' => 'required|string',
            'anciennete_grade' => 'required|numeric',
            'echelle' => 'required|string',
            'anciennete_echelle' => 'required|numeric',
            'echelon' => 'required|string',
            'anciennete_echelon' => 'required|numeric',
            'indice' => 'required|numeric',
            'statut_administratif' => 'required|string',
            'situation_administrative' => 'required|string',
            'fin_periode_detachement' => 'nullable|date',
            'integre_apres_detachement' => 'nullable|boolean',
            'integre_apres_mise_disposition' => 'nullable|boolean',
            'affectation' => 'nullable|string',
            'fonction' => 'nullable|string',
            'poste' => 'nullable|string',
            'type_sortie' => 'nullable|string',
            'date_sortie' => 'nullable|date',
            'administration_accueil' => 'nullable|string',
            'statut_activite' => 'nullable|string',
        ]);

        $informationsAdministratives = InformationAdministrative::create($validatedData);
        // Return a success response
        return response()->json(['message' => 'Informations Administratives created successfully', 'informationsAdministratives' => $informationsAdministratives], 201);
        }

     
    public function show(InformationAdministrative $informationAdministrative)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InformationAdministrative $informationAdministrative)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InformationAdministrative $informationAdministrative)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InformationAdministrative $informationAdministrative)
    {
        //
    }
}
