<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Sanction;
use Illuminate\Http\Request;

class SanctionController extends Controller
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
        $validatedData = $request->validate( [
            'cin' => 'required|exists:fonctionnaires,cin',
            'date_sanction' => 'required|date',
            'motif' => 'required|string',
            'nature_sanction' => 'required|string',
            'sanction' => 'required|string',
        ]);


        $sanction = Sanction::create($validatedData);
        return response()->json(['message' => 'Sanction created successfully', 'sanction' => $sanction], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Sanction $sanction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sanction $sanction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sanction $sanction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sanction $sanction)
    {
        //
    }
}
