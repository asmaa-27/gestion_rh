<?php

namespace App\Http\Controllers;
use App\Models\Fonctionnaire;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Storage;
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
        'codePostal' => 'nullable|integer',
        'telephone' => 'nullable|string|max:20',
        'email' => 'required|email|unique:fonctionnaires',
        'image' => [
            'image|required',
            File::types(['jpg', 'png', 'jpeg', 'pdf'])
        ],
    ]);


    $fonctionnaire = Fonctionnaire::create($validatedData);

// Handle the image upload if present
if ($request->hasFile('image')) {
    $image_url = $request->file('image')->store('images');
    $fonctionnaire->image = Storage::url($image_url);
    $fonctionnaire->save();
}

// Return a success response
return response()->json(['message' => 'Fonctionnaire created successfully', 'fonctionnaire' => $fonctionnaire], 201);
}

    /**
     * Display the specified resource.
     */
    public function show( Fonctionnaire $fonctionnaires ,$cin)
    {
        // $fonctionnaires = Fonctionnaire::where('cin', $cin)->with(['informationsFamiliales','informationsPrevoyanceSociale','informationsAdministratives','diplomes', 'affectations','demandesAbsence','mouvements','notations','sanctions','formationsRealisees', 'documents'])->get();
        $fonctionnaires = Fonctionnaire::where("cin",$cin)->firstOrFail();

    return response()->json($fonctionnaires->with(["informationsFamiliales","informationsAdministratives","informationsPrevoyanceSociale","notations","formationsRealisees","diplomes","mouvements","affectations","demandesAbsence","sanctions","documents"])->get());

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
