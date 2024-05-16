<!DOCTYPE html>
<html>
<head>
    <title>Demande d'absence</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #ffffff; /* White background */
            color: #333333; /* Dark grey text */
            padding: 20px;
            margin: 0;
            max-width: 600px; /* Max width for better readability */
            margin: auto; /* Center the content */
        }
      .header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 2px solid #007bff; /* Blue underline */
        }
      .header img {
            max-width: 50px; /* Make the image smaller */
            height: auto; /* Maintain aspect ratio */
            margin-right: 20px; /* Add some space between the image and the title */
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
        /* Enhance readability with larger headings and subheadings */
      .content h2 {
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
        }
      .content h3 {
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 5px;
        }
        /* Optional: Add a footer for contact information or legal notes */
      .footer {
            text-align: right;
            margin-top: 40px;
            font-size: 14px;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="{{ public_path('logo/logo.png') }}" alt="Logo">
        <h1>Demande d'absence Professionnelle</h1>
    </div>
    <div class="content">
        <h2>Détails de la Demande</h2>
        <p><strong>CIN:</strong> {{ $demandeAbsence->cin }}</p>
        <p><strong>Type d'absence:</strong> {{ $demandeAbsence->type_d_absence }}</p>
        <p><strong>Date de départ:</strong> {{ $demandeAbsence->date_depart }}</p>
        <p><strong>Date de retour:</strong> {{ $demandeAbsence->date_de_retour }}</p>
        <p><strong>Nombre de jours:</strong> {{ $demandeAbsence->nombre_de_jours }}</p>
        <p><strong>Nombre à déduire:</strong> {{ $demandeAbsence->nombre_a_deduire }}</p>
        <p><strong>Nombre à ne pas déduire:</strong> {{ $demandeAbsence->nombre_a_ne_pas_deduire }}</p>
        <p><strong>Remplaçant:</strong> {{ $demandeAbsence->remplaçant }}</p>
        <p><strong>Réliquat:</strong> {{ $demandeAbsence->reliquat }}</p>
        <h3>Informations sur le Fonctionnaire</h3>
        <p><strong>Nom:</strong> {{ $fonctionnaire->nom }}</p>
        <p><strong>Prénom:</strong> {{ $fonctionnaire->prenom }}</p>
        <p><strong>Adresse:</strong> {{ $fonctionnaire->ville }}, {{ $fonctionnaire->rue }}</p>
    </div>
    <!-- Optional Footer -->
    <div class="footer">
        <p>Contact | Legal Notes</p>
    </div>
</body>
</html>
