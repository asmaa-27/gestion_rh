import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showDetailsByCin } from '../../features/FontionnairesSlice';
import { FaExclamationCircle } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';


const DetailsFonctionnaires = () => {
  const dispatch = useDispatch();
  const { cin } = useParams();
  const { loading, error, fonctionnaires } = useSelector((state) => state.fonctionnaire);

  useEffect(() => {
    dispatch(showDetailsByCin(cin));
  }, [cin, dispatch]);

    if (loading) return (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50  ">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin  "></div>
      </div>
      <p className="text-gray-900 font-bold text-lg  ">Loading...</p>
    </div>
  </div>
);
   if (error) return (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="text-red-500 text-4xl   mb-4">
          <FaExclamationCircle />
        </div>
      </div>
      <p className="text-gray-900 font-bold text-lg  ">Error: {error}</p>
    </div>
  </div>
);

  if (!fonctionnaires || fonctionnaires.length === 0) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-red-500 text-4xl lg:text-6xl mb-4">
            <FaExclamationCircle />
          </div>
          <p className="text-gray-900 font-bold lg:text-2xl">Fonctionnaire not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="container mx-auto  px-4 flex justify-center items-center   ">
    <div className="text-center lg:text-4xl font-bold text-black dark:text-white">
      <div className="flex-1   bg-center  h-full sm:text-3xl mb-4">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString('Details de fonctionnaire ')
            .pauseFor(1000)
            .start();
          }}
        />
      </div>
    </div>
  </header>
      <div className="grid grid-cols-1 gap-4">
        {fonctionnaires.map((fonctionnaire) => (
          <div key={fonctionnaire.cin}>
             <div   className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4 flex flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2   ms-9">Les Informations Personnels</h3>
              <p  className="lg:text-xl ">Cin: {fonctionnaire.cin || "N/A"}</p>
              <p  className="lg:text-xl">Nom: {fonctionnaire.nom || "N/A"}</p>
              <p  className="lg:text-xl">Prenom: {fonctionnaire.prenom || "N/A"}</p>
              <p  className="lg:text-xl">Sexe: {fonctionnaire.sexe || "N/A"}</p>
              <p  className="lg:text-xl">Date Naissance: {fonctionnaire.date_naissance || "N/A"}</p>
              <p  className="lg:text-xl">Lieu Naissance: {fonctionnaire.lieu_naissance || "N/A"}</p>
              <p  className="lg:text-xl">Ville: {fonctionnaire.ville || "N/A"}</p>
              <p  className="lg:text-xl">Quartier: {fonctionnaire.quartier || "N/A"}</p>
              <p  className="lg:text-xl">Rue: {fonctionnaire.rue || "N/A"}</p>
              <p  className="lg:text-xl">Numero Rue: {fonctionnaire.numeroRue || "N/A"}</p>
              <p  className="lg:text-xl">Code Postal: {fonctionnaire.codePostal || "N/A"}</p>
              <p  className="lg:text-xl">Telephone: {fonctionnaire.telephone || "N/A"}</p>
              <p  className="lg:text-xl">Email: {fonctionnaire.email || "N/A"}</p>
            </div>
            <img src={fonctionnaire.image} alt="Profile Picture" className="w-48 h-48  mr-7 md:ml-4 self-center" />
          </div>

            <div className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4">
              <h3 className=" text-2xl font-semibold mb-2   ms-9">Les Informations Administratives</h3>
              <p className="lg:text-xl">CIN: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.cin : "  "}</p>
              <p className="lg:text-xl">PPR: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.ppr : "  "}</p>
              <p className="lg:text-xl">Numéro Poste Budgétaire: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.numero_poste_budgetaire : " "}</p>
              <p className="lg:text-xl">Date Recrutement: { fonctionnaire.informations_administratives ?fonctionnaire.informations_administratives.date_recrutement : "  "}</p>
              <p className="lg:text-xl">Diplôme Recrutement: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.diplome_recrutement : "  "}</p>
              <p className="lg:text-xl">Administration Recrutement: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.administration_recrutement : "  "}</p>
              <p className="lg:text-xl">Date Titularisation: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.date_titularisation :  "  "}</p>
              <p className="lg:text-xl">Grade: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.grade :  " "}</p>
              <p className="lg:text-xl">Ancienneté Grade: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.anciennete_grade : "  "}</p>
              <p className="lg:text-xl">Echelle: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.echelle : "  "}</p>
              <p className="lg:text-xl">Ancienneté Echelle: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.anciennete_echelle : "  "}</p>
              <p className="lg:text-xl">Echelon: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.echelon : "  "}</p>
              <p className="lg:text-xl">Ancienneté Échelon: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.anciennete_echelon : "  "}</p>
              <p className="lg:text-xl">Indice: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.indice : "  "}</p>
              <p className="lg:text-xl">Statut Administratif: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.statut_administratif : "  "}</p>
              <p className="lg:text-xl">Situation Administrative: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.situation_administrative : "  "}</p>
              <p className="lg:text-xl">Fin Période Détachement: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.fin_periode_detachement : "  "}</p>
              <p className="lg:text-xl">Intègre Après Détachement: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.integre_apres_detachement : "  "}</p>
              <p className="lg:text-xl">Intègre Après Mise Disposition: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.integre_apres_mise_disposition : "  "}</p>
              <p className="lg:text-xl">Affectation: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.affectation : "  "}</p>
              <p className="lg:text-xl">Fonction: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.fonction : "  "}</p>
              <p className="lg:text-xl">Poste: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.poste : "  "}</p>
              <p className="lg:text-xl">Type Sortie: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.type_sortie : "  "}</p>
              <p className="lg:text-xl">Date Sortie: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.date_sortie : "  "}</p>
              <p className="lg:text-xl">Administration Accueil: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.administration_accueil : "  "}</p>
              <p className="lg:text-xl">Statut Activité: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.statut_activite : "  "}</p>
            </div>

            <div className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4">
              <h3 className="text-2xl font-semibold mb-2   ms-9">Les Informations Familiales</h3>
              <p className="lg:text-xl">Nom Pere: { fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nom_pere : "  "}</p>
              <p className="lg:text-xl">Nom Mere: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nom_mere : "  "}</p>
              <p className="lg:text-xl">Situation Familiale: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.situation_familiale : "  "}</p>
              <p className="lg:text-xl">Date Mariage: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.date_mariage : "  "}</p>
              <p className="lg:text-xl">Nom Conjoint: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nom_conjoint : "  "}</p>
              <p className="lg:text-xl">CIN Conjoint: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.cin_conjoint : "  "}</p>
              <p className="lg:text-xl">Date Naissance Conjoint: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.date_naissance_conjoint : "  "}</p>
              <p className="lg:text-xl">Fonction Conjoint: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.fonction_conjoint : "  "}</p>
              <p className="lg:text-xl">Nombre Enfants: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nombre_enfants : "  "}</p>
            </div>

            <div className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4">
              <h3 className="text-2xl font-semibold mb-2   ms-9">Les Informations  Prevoyances Sociales</h3>
              <p className="lg:text-xl">Organisme Retraite: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.organisme_retraite : "  "}</p>
              <p className="lg:text-xl">Numéro Affiliation Retraite: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.numero_affiliation_retraite : "  "}</p>
              <p className="lg:text-xl">Date Affiliation Retraite: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.date_affiliation_retraite : "  "}</p>
              <p className="lg:text-xl">Organisme Prévoyance Sociale: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.organisme_prevoyance_sociale : "  "}</p>
              <p className="lg:text-xl">Numéro Affiliation CNOPS: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.numero_affiliation_cnops : "  "}</p>
              <p className="lg:text-xl">Numéro Immatriculation CNOPS: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.numero_immatriculation_cnops : "  "}</p>
              <p className="lg:text-xl">Date Affiliation CNOPS: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.date_affiliation_cnops : "  "}</p>
              <p className="lg:text-xl">Numéro Affiliation Fondation Hassan II: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.numero_affiliation_fondation_hassan_ii : "  "}</p>
              <p className="lg:text-xl">Organisme Assurance: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.organisme_assurance : "  "}</p>
              <p className="lg:text-xl">Numéro Affiliation Assurance: {fonctionnaire.informations_prevoyance_sociale ?fonctionnaire.informations_prevoyance_sociale.numero_affiliation_assurance : "  "}</p>
            </div>
            <div className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4">
              <h3 className="text-2xl font-semibold mb-2   ms-9">Les Affectations</h3>
            <p className="lg:text-xl">Entité: {fonctionnaire.affectations ?fonctionnaire.affectations.entite : " "}</p>
            <p className="lg:text-xl">Date Affectation: {fonctionnaire.affectations ?fonctionnaire.affectations.date_affectation :" "}</p>
            <p className="lg:text-xl">Poste: {fonctionnaire.affectations ?fonctionnaire.affectations.poste : " "}</p>
            </div>
            <div className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4">
              <h3 className="text-2xl font-semibold mb-2   ms-9">Les Diplomes</h3>
              <p className="lg:text-xl">Intitulé: {fonctionnaire.diplomes ?fonctionnaire.diplomes.intitule : "  "}</p>
              <p className="lg:text-xl">Spécialité: {fonctionnaire.diplomes ?fonctionnaire.diplomes.specialite : "  "}</p>
              <p className="lg:text-xl">Date Obtention: {fonctionnaire.diplomes ?fonctionnaire.diplomes.date_obtention : "  "}</p>
              <p className="lg:text-xl">Établissement: {fonctionnaire.diplomes ?fonctionnaire.diplomes.etablissement : "  "}</p>
            </div>
            <div className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4">
              <h3 className="text-2xl font-semibold mb-2   ms-9">Les Mouvements</h3>
              <p className="lg:text-xl">Administration: {fonctionnaire.mouvements ?fonctionnaire.mouvements.administration : "  "}</p>
              <p className="lg:text-xl">Date de Début: {fonctionnaire.mouvements ?fonctionnaire.mouvements.date_debut : "  "}</p>
              <p className="lg:text-xl">Date de Fin: {fonctionnaire.mouvements ?fonctionnaire.mouvements.date_fin : "  "}</p>
            </div>
            <div className="border mb-9 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-xl mt-4">
              <h3 className="text-2xl font-semibold mb-2   ms-9">Les  Notations</h3>
              <p className="lg:text-xl">Année: {fonctionnaire.notations ?fonctionnaire.notations.annee :"  "}</p>
              <p className="lg:text-xl">Note: {fonctionnaire.notations ?fonctionnaire.notations.note :"  "}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsFonctionnaires;
