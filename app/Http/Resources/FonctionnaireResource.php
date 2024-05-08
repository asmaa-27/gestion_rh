<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FonctionnaireResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "informationsFamiliales" => $this->informationsFamiliales,
            "informationsAdministratives" => $this->informationsAdministratives,
            "informationsPrevoyanceSociale" => $this->informationsPrevoyanceSociale,
            "notations" => $this->notations,
            "formationsRealisees" => $this->formationsRealisees,
            "diplomes" => $this->diplomes,
            "mouvements" => $this->mouvements,
            "affectations" => $this->affectations,
            "demandesAbsence" => $this->demandesAbsence,
            "sanctions" => $this->sanctions,
            "documents" => $this->documents
        ];
    }
}
