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
        $validator = Validator::make($request->all(), [
            'id_fonctionnaire' => 'required|exists:fonctionnaires,id',
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
            'organismesPrevoyanceSocialeHistorique' => 'nullable|array',
            'organismesPrevoyanceSocialeHistorique.*.organisme_prevoyance_sociale' => 'required|string',
            'organismesRetraiteHistorique' => 'nullable|array',
            'organismesRetraiteHistorique.*.organisme_retraite' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        DB::beginTransaction();

        try {
            $informationsPrevoyanceSociales = InformationPrevoyanceSociale::create($request->only('id_fonctionnaire', 'organisme_retraite', 'numero_affiliation_retraite', 'date_affiliation_retraite', 'organisme_prevoyance_sociale', 'numero_affiliation_cnops', 'numero_immatriculation_cnops', 'date_affiliation_cnops', 'numero_affiliation_fondation_hassan_ii', 'organisme_assurance', 'numero_affiliation_assurance'));

            if ($request->has('organismesPrevoyanceSocialeHistorique')) {
                foreach ($request->organismesPrevoyanceSocialeHistorique as $historiqueData) {
                    OrganismePrevoyanceSocialeHistorique::create(array_merge($historiqueData, ['id_info_prevS' => $informationsPrevoyanceSociales->id]));
                }
            }

            if ($request->has('organismesRetraiteHistorique')) {
                foreach ($request->organismesRetraiteHistorique as $historiqueData) {
                    OrganismeRetraiteHistorique::create(array_merge($historiqueData, ['id_info_prevS' => $informationsPrevoyanceSociales->id]));
                }
            }

            DB::commit();
            return response()->json(['message' => 'InformationsPrevoyanceSociales, OrganismePrevoyanceSocialeHistorique, and OrganismeRetraiteHistorique created successfully', 'informationsPrevoyanceSociales' => $informationsPrevoyanceSociales], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Error creating InformationsPrevoyanceSociales, OrganismePrevoyanceSocialeHistorique, and OrganismeRetraiteHistorique', 'error' => $e->getMessage()], 500);
        }
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
