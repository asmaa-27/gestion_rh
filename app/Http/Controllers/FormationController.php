<?php

namespace App\Http\Controllers;

use App\Models\FormationRealisee;
use Illuminate\Http\Request;

class FormationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function countByMonth()
    {
        return FormationRealisee::selectRaw('MONTH(date_debut) as month, COUNT(*) as count')
            ->groupBy('month')
            ->get();
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FormationRealisee $formation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FormationRealisee $formation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FormationRealisee $formation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FormationRealisee $formation)
    {
        //
    }
}
