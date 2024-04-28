<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\InformationPrevoyanceSociale;
use Illuminate\Http\Request;
use App\Models\OrganismePrevoyanceSocialeHistorique;
use App\Models\OrganismeRetraiteHistorique;
class InformationPrevoyanceSocialeController extends Controller
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
        $validatedData = $request->validate([
            'cin' => 'required|exists:fonctionnaires,cin',
            'organisme_retraite' => 'required|string',
            'numero_affiliation_retraite' => 'required|string',
            'date_affiliation_retraite' => 'required|date',
            'organisme_prevoyance_sociale' => 'required|string',
            'numero_affiliation_cnops' => 'required|string',
            'numero_immatriculation_cnops' => 'required|string',
            'date_affiliation_cnops' => 'required|date',
            'numero_affiliation_fondation_hassan_ii' => 'required|string',
            'organisme_assurance' => 'required|string',
            'numero_affiliation_assurance' => 'required|string',
        ]);

        $informationPrevoyanceSociale = InformationPrevoyanceSociale::create($validatedData);

        // Assuming you have set up model observers to track changes
        // This will automatically create history records when the main record is updated

        return response()->json(['message' => 'InformationPrevoyanceSociale created successfully', 'informationPrevoyanceSociale' => $informationPrevoyanceSociale], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(InformationPrevoyanceSociale $informationPrevoyanceSociale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InformationPrevoyanceSociale $informationPrevoyanceSociale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InformationPrevoyanceSociale $informationPrevoyanceSociale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InformationPrevoyanceSociale $informationPrevoyanceSociale)
    {
        //
    }
}
