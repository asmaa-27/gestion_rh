<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\DemandeAbsence;
use Illuminate\Http\Request;

class DemandeAbsenceController extends Controller
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
        $validator = Validator::make($request->all(), [
            'id_fonctionnaire' => 'required|exists:fonctionnaires,id',
            'date_depart' => 'required|date',
            'nombre_de_jours' => 'required|integer',
            'nombre_a_deduire' => 'required|integer',
            'nombre_a_ne_pas_deduire' => 'required|integer',
            'type_d_absence' => 'required|string',
            'date_de_retour' => 'required|date',
            'remplaçant' => 'nullable|string',
            'reliquat' => 'nullable|integer',
            'cumul_des_absences_de_maladie' => 'nullable|integer',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $demandeAbsence = DemandeAbsence::create($request->all());
        return response()->json(['message' => 'Demande Absence created successfully', 'demandeAbsence' => $demandeAbsence], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(DemandeAbsence $demandeAbsence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DemandeAbsence $demandeAbsence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DemandeAbsence $demandeAbsence)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DemandeAbsence $demandeAbsence)
    {
        //
    }
}
