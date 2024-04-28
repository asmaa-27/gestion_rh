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
            'cin' => 'required|exists:fonctionnaires,string',
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
            $informationsFamiliales = InformationFamiliale::create($request->only('cin', 'nom_pere', 'nom_mere', 'situation_familiale', 'date_mariage', 'nom_conjoint', 'cin_conjoint', 'date_naissance_conjoint', 'fonction_conjoint', 'nombre_enfants'));

            foreach ($request->enfants as $enfantData) {
                Enfant::create(array_merge($enfantData, ['id_information_familiales' => $informationsFamiliales->id]));
            }

            if ($request->has('conjoints')) {
                foreach ($request->conjoints as $conjointData) {
                    Conjoint::create(array_merge($conjointData, ['id_information_familiales' => $informationsFamiliales->id]));
                }
            }

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
