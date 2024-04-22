<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Diplome;
use Illuminate\Http\Request;

class DiplomeController extends Controller
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
            'intitule' => 'required|string',
            'specialite' => 'nullable|string',
            'date_obtention' => 'required|date',
            'etablissement' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $diplome = Diplome::create($request->all());
        return response()->json(['message' => 'Diplome created successfully', 'diplome' => $diplome], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Diplome $diplome)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Diplome $diplome)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Diplome $diplome)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Diplome $diplome)
    {
        //
    }
}
