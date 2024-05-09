<!DOCTYPE html>
<html>
<head>
    <title>Demande d'absence</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9; /* Light grey background */
            color: #333; /* Dark grey text */
            padding: 20px;
            margin: 0;
        }
       .header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 2px solid #007bff; /* Blue underline */
        }
       .header h1 {
            font-size: 24px;
            margin: 0;
        }
       .content {
            margin-bottom: 40px;
        }
       .content p {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
       .content p:last-child {
            margin-bottom: 0;
        }
        /* Add more styles as needed */
    </style>
</head>
<body>
    <div class="header">
        {{-- <img src="https://agadir-indh.gov.ma/wp-content/themes/html5indh/img/royaume-du-maroc-fr.png" alt=""> --}}
        {{-- <img src="{{ public_path('storage/logo/logo.png') }}" alt=""> --}}
        <h1>Demande d'absence</h1>
    </div>
    <div class="content">
        <p>CIN: {{ $demandeAbsence->cin }}</p>
        <p>Type d'absence: {{ $demandeAbsence->type_d_absence }}</p>
        <p>Date de départ: {{ $demandeAbsence->date_depart }}</p>
        <p>Date de retour: {{ $demandeAbsence->date_de_retour }}</p>
        <p>Nombre de jours: {{ $demandeAbsence->nombre_de_jours }}</p>
        <p>Nombre à déduire: {{ $demandeAbsence->nombre_a_deduire }}</p>
        <p>Nombre à ne pas déduire: {{ $demandeAbsence->nombre_a_ne_pas_deduire }}</p>
        <p>Remplaçant: {{ $demandeAbsence->remplaçant }}</p>
        <p>Réliquat: {{ $demandeAbsence->reliquat }}</p>
        <p>Nom fonctionnaire: {{ $fonctionnaire->nom }}</p>
        <p>Prénom fonctionnaire: {{ $fonctionnaire->prenom }}</p>
        <p>Adresse: {{ $fonctionnaire->ville }}, {{ $fonctionnaire->rue }}</p>
    </div>
</body>
</html>
