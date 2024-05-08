<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\DemandeAbsence;
use App\Models\SoldConge;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Holiday;
use App\Models\Fonctionnaire;
use Barryvdh\DomPDF\Facade\Pdf ;

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
        $validatedData = $request->validate([
            'cin' => 'required|exists:fonctionnaires,cin',
            'date_depart' => 'required|date',
            'nombre_de_jours' => 'required|integer',
            'nombre_a_deduire' => 'required|integer',
            'nombre_a_ne_pas_deduire' => 'required|integer',
            'type_d_absence' => 'required|string',
            'remplaçant' => 'nullable|string', 
        ]);

        $dateDepart = Carbon::parse($validatedData['date_depart']);
        $dateRetour = $dateDepart->copy();
        $joursRestants = $validatedData['nombre_de_jours'];
        $holidays = Holiday::where('active', 1)->get()->pluck('date')->toArray();

        while ($joursRestants > 0) {
            $dateRetour->addDay();
            if ($dateRetour->isWeekend() || in_array($dateRetour->toDateString(), $holidays)) {
                continue;
            }
            $joursRestants--;
        }

        $reliquat = $validatedData['nombre_de_jours'] - $validatedData['nombre_a_deduire'];
        $cumulAbsencesMaladie = DemandeAbsence::where('cin', $validatedData['cin'])
                            ->where('type_d_absence', 'maladie')
                            ->sum('nombre_de_jours');


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



    public function resetSoldeConges() {
    $currentYear = Carbon::now()->year;
    $nextYear = $currentYear + 1;

    // Check if today is December 31st of the current year
    if (Carbon::today()->day == 31 && Carbon::today()->month == 12) {
        // Reset leave balance to 0 for all SoldConge records associated with Fonctionnaires created in the current year
        SoldConge::whereHas('fonctionnaire', function ($query) use ($currentYear) {
            $query->whereYear('created_at', $currentYear);
        })->update(['nombre_jours_conges' => 0]);
    }

    // Check if today is January 1st of the next year
    if (Carbon::today()->day == 1 && Carbon::today()->month == 1) {
        // Reset leave balance to 22 for all SoldConge records associated with Fonctionnaires created in the next year
        SoldConge::whereHas('fonctionnaire', function ($query) use ($nextYear) {
            $query->whereYear('created_at', $nextYear);
        })->update(['nombre_jours_conges' => 22]);
    }
}
    /**
     * Display the specified resource.
     */
    // public function show(DemandeAbsence $demandeAbsence,$cin)
    // {
    //     $demandeAbsence = DemandeAbsence::with(['fonctionnaire'])->where('cin', $cin)->firstOrFail();
    //     return response()->json($demandeAbsence->get());
    // }
public function downloadPdf(Request $request,$cin){
    $demandeAbsence =DemandeAbsence::with(['fonctionnaire'])->where('cin', $cin)->firstOrFail();
    $pdf = PDF::loadView('pdf_view',['demandeAbsence'=>$demandeAbsence]);

    return $pdf->download('demande_absence.pdf');
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
