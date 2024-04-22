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
        $validator = Validator::make($request->all(), [
            'id_fonctionnaire' => 'required|exists:fonctionnaires,id',
            'ppr' => 'required|numeric', // Assuming PPR is a numeric value
            'numero_poste_budgetaire' => 'required|numeric', // Assuming Numero Poste Budgetaire is a numeric value
            'date_recrutement' => 'required|date',
            'diplome_recrutement' => 'required|string',
            'administration_recrutement' => 'required|string',
            'date_titularisation' => 'required|date',
            'grade' => 'required|string',
            'anciennete_grade' => 'required|numeric', // Assuming Anciennete Grade is a numeric value
            'echelle' => 'required|string',
            'anciennete_echelle' => 'required|numeric', // Assuming Anciennete Echelle is a numeric value
            'echelon' => 'required|string',
            'anciennete_echelon' => 'required|numeric', // Assuming Anciennete Echelon is a numeric value
            'indice' => 'required|numeric', // Assuming Indice is a numeric value
            'statut_administratif' => 'required|string',
            'situation_administrative' => 'required|string',
            'fin_periode_detachement' => 'nullable|date', // Assuming Fin Periode Detachement is optional and a date
            'integre_apres_detachement' => 'required|boolean', // Assuming Integre Apres Detachement is a boolean value
            'integre_apres_mise_disposition' => 'required|boolean', // Assuming Integre Apres Mise Disposition is a boolean value
            'affectation' => 'required|string',
            'fonction' => 'required|string',
            'poste' => 'required|string',
            'type_sortie' => 'required|string',
            'date_sortie' => 'nullable|date', // Assuming Date Sortie is optional and a date
            'administration_accueil' => 'required|string',
            'statut_activite' => 'required|string',
        ]);

        // If validation fails, return the error messages
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Create a new InformationsAdministratives
        $informationsAdministratives = InformationAdministrative::create($request->all());

        // Return a success response
        return response()->json(['message' => 'Informations Administratives created successfully', 'informationsAdministratives' => $informationsAdministratives], 201);
    }

    /**
     * Display the specified resource.
     */
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
