<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\InformationFamiliale;
use Illuminate\Http\Request;
use App\Models\Enfant;
use App\Models\Conjoint;
class InformationFamilialeController extends Controller
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
            'cin' => 'required|exists:fonctionnaires,cin',
            'nom_pere' => 'required|string',
            'nom_mere' => 'required|string',
            'situation_familiale' => 'required|string',
            'date_mariage' => 'nullable|date',
            'nom_conjoint' => 'nullable|string',
            'cin_conjoint' => 'nullable|string',
            'date_naissance_conjoint' => 'nullable|date',
            'fonction_conjoint' => 'nullable|string',
            'nombre_enfants' => 'required|integer',
            'enfants' => 'required|array',
            'enfants.*.prenom_enfant' => 'required|string',
            'enfants.*.nom_mere' => 'required|string',
            'enfants.*.date_naissance_enfant' => 'required|date',
            'conjoints' => 'nullable|array',
            'conjoints.*.date_mariage' => 'nullable|date',
            'conjoints.*.date_divorce' => 'nullable|date',
            'conjoints.*.nom_conjoint' => 'nullable|string',
            'conjoints.*.cin_conjoint' => 'nullable|string',
        ]);

        DB::beginTransaction();

         try {
        // Create the main InformationFamiliale record
        $informationsFamiliales = InformationFamiliale::create($validatedData);

        // Create Enfants records
        foreach ($request->enfants as $enfantData) {
            // Ensure the id_information_familiales key is present in the $enfantData array
            $enfantData['id_information_familiales'] = $informationsFamiliales->id;
            Enfant::create($enfantData);
        }

        // Create Conjoints records
        if ($request->has('conjoints')) {
            foreach ($request->conjoints as $conjointData) {
                // Inside the foreach loop for creating Conjoints
                $conjoint = new Conjoint($conjointData);
// Check if 'cin_conjoint' is provided, otherwise set it to null
                    $conjoint->cin_conjoint = isset($conjointData['cin_conjoint']) ? $conjointData['cin_conjoint'] : null;
// Associate each Conjoint with the InformationFamiliale
                    $conjoint->id_information_familiales = $informationsFamiliales->id;
                    $conjoint->save();
            }
        }

        // Load related Enfants and Conjoints before returning the response
        $informationsFamiliales->load('enfants', 'conjoints');
            DB::commit();
            return response()->json(['message' => 'InformationsFamiliales, Enfants, and Conjoints created successfully', 'informationsFamiliales' => $informationsFamiliales], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Error creating InformationsFamiliales, Enfants, and Conjoints', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(InformationFamiliale $informationFamiliale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InformationFamiliale $informationFamiliale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InformationFamiliale $informationFamiliale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InformationFamiliale $informationFamiliale)
    {
        //
    }
}
