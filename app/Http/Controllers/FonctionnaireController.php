<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Fonctionnaire;
use Illuminate\Http\Request;

class FonctionnaireController extends Controller
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
        $validator = Validator::make($request->all(), [
            'cin' => 'required|unique:fonctionnaires',
            'nom' => 'required',
            'prenom' => 'required',
            'sexe' => 'required',
            'date_naissance' => 'required|date',
            'lieu_naissance' => 'required',
            'ville' => 'required',
            'quartier' => 'required',
            'rue' => 'required',
            'numeroRue' => 'required',
            'codePostal' => 'required',
            'telephone' => 'required',
            'email' => 'required|email|unique:fonctionnaires',
        ]);

        // If validation fails, return the error messages
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Create a new fonctionnaire
        $fonctionnaire = new Fonctionnaire($request->all());
        $fonctionnaire->save();

        // Return a success response
        return response()->json(['message' => 'Fonctionnaire created successfully', 'fonctionnaire' => $fonctionnaire], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Fonctionnaire $fonctionnaire)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fonctionnaire $fonctionnaire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Fonctionnaire $fonctionnaire)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fonctionnaire $fonctionnaire)
    {
        //
    }
}
