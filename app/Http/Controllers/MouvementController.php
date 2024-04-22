<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Mouvement;
use Illuminate\Http\Request;

class MouvementController extends Controller
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
            'administration' => 'required|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $mouvement = Mouvement::create($request->all());
        return response()->json(['message' => 'Mouvement created successfully', 'mouvement' => $mouvement], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mouvement $mouvement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mouvement $mouvement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mouvement $mouvement)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mouvement $mouvement)
    {
        //
    }
}
