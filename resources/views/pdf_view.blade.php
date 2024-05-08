<!DOCTYPE html>
<html>
<head>
    <title>Demande d'absence</title>
    <style>
        /* Add your CSS styles here */
        body {
            font-family: Arial, sans-serif;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .content {
            margin-bottom: 20px;
        }
        /* Add more styles as needed */
    </style>
</head>
<body>
    <div class="header">
        <h1>Demande d'absence</h1>
    </div>
    <div class="content">
        <p>CIN: {{ $demandeAbsence->cin }}</p>
        <p>type d absence : {{ $demandeAbsence->type_d_absence }}</p>
        <p>date_de_retour: {{ $demandeAbsence->date_de_retour }}</p>
        <p>reliquat: {{ $demandeAbsence->reliquat }}</p>
    </div>
</body>
</html>