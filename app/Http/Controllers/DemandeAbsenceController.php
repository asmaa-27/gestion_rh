<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\DemandeAbsence;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Holiday;
use App\Models\Fonctionnaire;


class DemandeAbsenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $demandeAbsence = DemandeAbsence::all();
        return response()->json($demandeAbsence);
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
            // Validation des données de la requête
            $validatedData = $request->validate([
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

            // Récupération des jours fériés
            $holidays = Holiday::where('active', 1)->get()->pluck('date')->toArray();

            // Calcul de la date de retour en excluant les week-ends et les jours fériés
            $dateDepart = Carbon::parse($validatedData['date_depart']);
            $dateRetour = $dateDepart->copy(); // Copie de la date de départ pour éviter de modifier l'original
            $joursRestants = $validatedData['nombre_de_jours'];
            while ($joursRestants > 0) {
                $dateRetour->addDay();
                if ($dateRetour->isWeekend() || in_array($dateRetour->toDateString(), $holidays)) {
                    continue; // Passe à la journée suivante si c'est un week-end ou un jour férié
                }
                $joursRestants--;
            }

            // Calcul du reliquat
            $reliquat = $validatedData['nombre_de_jours'] - $validatedData['nombre_a_deduire'];

            // Récupération du fonctionnaire par CIN
            $fonctionnaire = Fonctionnaire::firstWhere('cin', $validatedData['cin']);

            // Calcul du cumul des absences de maladie
            $cumulAbsencesMaladie = DemandeAbsence::where('cin', $validatedData['cin'])
                                ->where('type_d_absence', 'maladie')
                                ->sum('nombre_de_jours');

            // Création de la nouvelle demande d'absence
            $demandeAbsence = DemandeAbsence::create([
                'cin' => $validatedData['cin'],
                'date_depart' => $validatedData['date_depart'],
                'nombre_de_jours' => $validatedData['nombre_de_jours'],
                'nombre_a_deduire' => $validatedData['nombre_a_deduire'],
                'nombre_a_ne_pas_deduire' => $validatedData['nombre_a_ne_pas_deduire'],
                'type_d_absence' => $validatedData['type_d_absence'],
                'date_de_retour' => $dateRetour->format('Y-m-d'),
                'remplaçant' => $validatedData['remplaçant'],
                'reliquat' => $reliquat,
                'cumul_des_absences_de_maladie' => $cumulAbsencesMaladie,
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
    public function show(DemandeAbsence $demandeAbsence,$cin)
    {
        $demandeAbsence = DemandeAbsence::with(['fonctionnaire'])->where('cin', $cin)->firstOrFail();
        return response()->json($demandeAbsence);
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
