<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Affectation;
use Illuminate\Http\Request;

class AffectationController extends Controller
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
            'entite' => 'required|string',
            'date_affectation' => 'required|date',
            'poste' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $affectation = Affectation::create($request->all());
        return response()->json(['message' => 'Affectation created successfully', 'affectation' => $affectation], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Affectation $affectation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Affectation $affectation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Affectation $affectation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Affectation $affectation)
    {
        //
    }
}
