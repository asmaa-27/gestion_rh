<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
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
        $request->validate([
            'cin' => 'required|exists:fonctionnaires,cin',
            'type' => 'required|string',
            'nom' => 'nullable|string',
            'chemin' => 'required|file',
        ]);

        if ($request->hasFile('chemin')) {
            $file = $request->file('chemin');
            $path = $file->store('documents', 'public');

            $document = Document::create([
                'cin' => $request->input('cin'),
                'type' => $request->input('type'),
                'nom' => $request->input('nom'),
                'chemin' => $path,
            ]);

            return response()->json(['message' => 'Document created successfully', 'document' => $document], 201);
        } else {
            return response()->json(['message' => 'No file uploaded'], 400);
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
