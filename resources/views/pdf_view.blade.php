<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demande d'absence Professionnelle</title>
    <style>
        /* Custom CSS for the layout */
        body {
            font-family: Arial, sans-serif;
            background-color: #fff;
            color: #333;
            padding: 20px;
            margin: 0;
        }

        .container {
            max-width: 600px;
            margin: auto;
        }

        .header {
            margin-bottom: 20px;
        }

        .header::after {
            content: '';
            display: block;
            clear: both;
        }

        .header .right {
            float: right;
        }

        .header .left {
            float: left;
        }

        h2 {
             margin-top: 17%;
            text-align: center;
            margin-bottom: 20px;
        }

        .content{
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left: 30px;
            padding-right: 30px;
        }
        ul {
            list-style: none;
            padding: 0;
        }

        li {
            margin-bottom: 10px;
        }

        .signatures {
            font-size: 0;
            margin-top: 10%;
            margin-bottom: 20%;
        }

        .signature {
            display: inline-block;
            margin-right: 8%;
            font-size: 16px;
        }
        .signatures .signature:first-child {
            margin-left: 26px;
        }


        .footer {
            margin-top: 20px;
        }
        .footer h3 {
            text-decoration: underline;
            color: rgb(177, 52, 52)

        }

        .footer p {
            text-decoration: underline;
             line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="right">À Agadir : <?php echo date('Y-m-d', strtotime($demandeAbsence->created_at)); ?></div>
            <div class="left">
                    Royaume du Maroc<br>
                    Ministère de l'Intérieur<br>
                    L'état de Souss Mass<br>
                Préfecture d'Agadir Ida-Outanane<br>
                    Secrétariat Général<br>
                Service des Ressources Humaines
            </div>
        </div>
        <h2>Demande d'autorisation d'absence</h2>
            <div class="content">
                <ul>
                    <li><strong>C.I.N :</strong>   {{ $demandeAbsence->cin }}</li>
                    <li><strong>Nom Complet  :  </strong>  {{ $fonctionnaire->prenom }}  {{ $fonctionnaire->nom }}</li>
                    <li><strong>Remplaçant   :  </strong>   {{ $demandeAbsence->remplaçant }}</li>
                    <li><strong>Grade   :  </strong>   {{ $informationsAdministratives->grade }}</li>
                    <li><strong> Departement   :  </strong>   {{ $informationsAdministratives->affectation }}</li>
                    <li><strong>Type d'absence   :  </strong>   {{ $demandeAbsence->type_d_absence }}</li>
                    <li><strong>Nombre de jours   :  </strong>   {{ $demandeAbsence->nombre_de_jours }}</li>
                    <li><strong>Date de départ   :  </strong>   {{ $demandeAbsence->date_depart }}</li>
                    <li><strong>Date de retour   :  </strong>   {{ $demandeAbsence->date_de_retour }}</li>
                </ul>
            </div>
            <div class="signatures">
                <span class="signature">La personne concernée</span>
                <span class="signature">Chef de département</span>
                <span class="signature">Chef de service</span>
        </div>
        <div class="footer">
            <h3>Notes :</h3>
            <p> -  Soumettre cette demande une semaine avant le début de la période de congé. En cas d'urgence, veuillez contacter le service concerné.</p>
            <p> -  La permission ne peut être retirée que la veille de son début.</p>
        </div>
    </div>
</body>
</html>
