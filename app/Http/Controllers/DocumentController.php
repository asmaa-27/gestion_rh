<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Document;
use Illuminate\Http\Request;
use App\Models\DocumentPieceJointe;
class DocumentController extends Controller
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
            'nom' => 'required|string',
            'description' => 'nullable|string',
            'sous_dossier' => 'nullable|string',
            'documentsPiecesJointes' => 'required|array',
            'documentsPiecesJointes.*.nom_fichier' => 'required|string',
            'documentsPiecesJointes.*.chemin_fichier' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        DB::beginTransaction();

        try {
            $document = Document::create($request->only('id_fonctionnaire', 'nom', 'description', 'sous_dossier'));

            foreach ($request->documentsPiecesJointes as $pieceJointe) {
                DocumentPieceJointe::create([
                    'id_document' => $document->id,
                    'nom_fichier' => $pieceJointe['nom_fichier'],
                    'chemin_fichier' => $pieceJointe['chemin_fichier'],
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Document and DocumentPieceJointes created successfully', 'document' => $document], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Error creating document and DocumentPieceJointes', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        //
    }
}
