<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\DemandeAbsence;
use Carbon\Carbon;
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
        // Validate the request data
        $request->validate([
            'cin' => 'required|exists:fonctionnaires,cin',
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

        // Calculate return date, considering weekends and holidays
        $endDate = Carbon::parse($request->date_de_retour)->addDays($request->nombre_de_jours - 1);
        $holidays = $this->getHolidays(); // Assuming you have a method to get holidays

        while ($endDate->isWeekend() || in_array($endDate->format('Y-m-d'), $holidays)) {
            $endDate->addDay();
        }

        // Create a new DemandeAbsence record
        $demandeAbsence = DemandeAbsence::create([
            'cin' => $request->cin,
            'date_depart' => $request->date_depart,
            'nombre_de_jours' => $request->nombre_de_jours,
            'nombre_a_deduire' => $request->nombre_a_deduire,
            'nombre_a_ne_pas_deduire' => $request->nombre_a_ne_pas_deduire,
            'type_d_absence' => $request->type_d_absence,
            'date_de_retour' => $endDate->format('Y-m-d'),
            'remplaçant' => $request->remplaçant,
            'reliquat' => $request->reliquat,
            'cumul_des_absences_de_maladie' => $request->cumul_des_absences_de_maladie,
        ]);

        return response()->json(['message' => 'Demande Absence created successfully', 'demandeAbsence' => $demandeAbsence], 201);
    }

    private function getHolidays()
    {
        // Placeholder for fetching holidays
        // Implement logic to fetch holidays from an external source or database
        return [];
    }

    private function resetLeaveBalance($userId)
    {
        // Placeholder for resetting leave balance
        // Implement logic to reset leave balance for the given user ID
    }

    // Other methods...


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
