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
        $fonctionnaires = Fonctionnaire::all();
        return response()->json($fonctionnaires);
    }





    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Validate the request data
    $validatedData = $request->validate([
        'cin' => 'required|unique:fonctionnaires',
        'nom' => 'required',
        'prenom' => 'required',
        'sexe' => 'required|in:Homme,Femme',
        'date_naissance' => 'required|date',
        'lieu_naissance' => 'required',
        'ville' => 'required',
        'quartier' => 'nullable',
        'rue' => 'nullable',
        'numeroRue' => 'nullable|integer',
        'codePostal' => 'nullable|string|max:10',
        'telephone' => 'nullable|string|max:20',
        'email' => 'required|email|unique:fonctionnaires',
        'image' => 'nullable|image|max:2048|mimes:jpeg,png,jpg,gif,svg',
    ]);

    // Create a new fonctionnaire
    $fonctionnaires = Fonctionnaire::create( $validatedData );

    // Handle the image upload if present
    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $imageName);
        $fonctionnaires->image = $imageName;
        $fonctionnaires->save();
    }

    // Return a success response
    return response()->json(['message' => 'Fonctionnaire created successfully', 'fonctionnaire' => $fonctionnaires], 201);
}

    /**
     * Display the specified resource.
     */
    public function show( Fonctionnaire $fonctionnaires ,$cin)
    {
        $fonctionnaires = Fonctionnaire::with(['information_familiales','information_prevoyance_sociales','information_administratives','diplomes', 'affectations','demande_absences','mouvements','notations','sanctions','formation_realisees', 'documents'])->where('cin', $cin)->firstOrFail();
    return response()->json($fonctionnaires);
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
    public function destroy(Fonctionnaire $fonctionnaires ,$cin)
    {
        $fonctionnaires = Fonctionnaire::where('cin', $cin)->firstOrFail();
    $fonctionnaires->delete();
    return response()->json(['message' => 'Fonctionnaire deleted successfully']);
    }
}
