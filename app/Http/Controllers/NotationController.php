<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Notation;
use Illuminate\Http\Request;

class NotationController extends Controller
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
        $validatedData = $request->validate([
            'cin' => 'required|exists:fonctionnaires,cin',
            'annee' => 'required|integer',
            'note' => 'required|numeric',
        ]);

        $notation = Notation::create($validatedData);
        return response()->json(['message' => 'Notation created successfully', 'notation' => $notation], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Notation $notation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notation $notation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Notation $notation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notation $notation)
    {
        //
    }
}
