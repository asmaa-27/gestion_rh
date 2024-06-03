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
      <div className="flex-1   bg-center  h-full">
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
             <div key={fonctionnaire.cin} className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4 flex flex-col md:flex-row">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Personnel</h3>
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

            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Informations Administratives</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
              <p className="lg:text-xl">PPR: {fonctionnaire.ppr || "N/A"}</p>
              <p className="lg:text-xl">Numéro Poste Budgétaire: {fonctionnaire.numero_poste_budgetaire || "N/A"}</p>
              <p className="lg:text-xl">Date Recrutement: {fonctionnaire.date_recrutement || "N/A"}</p>
              <p className="lg:text-xl">Diplôme Recrutement: {fonctionnaire.diplome_recrutement || "N/A"}</p>
              <p className="lg:text-xl">Administration Recrutement: {fonctionnaire.administration_recrutement || "N/A"}</p>
              <p className="lg:text-xl">Date Titularisation: {fonctionnaire.date_titularisation || "N/A"}</p>
              <p className="lg:text-xl">Grade: {fonctionnaire.grade || "N/A"}</p>
              <p className="lg:text-xl">Ancienneté Grade: {fonctionnaire.anciennete_grade || "N/A"}</p>
              <p className="lg:text-xl">Echelle: {fonctionnaire.echelle || "N/A"}</p>
              <p className="lg:text-xl">Ancienneté Echelle: {fonctionnaire.anciennete_echelle || "N/A"}</p>
              <p className="lg:text-xl">Echelon: {fonctionnaire.echelon || "N/A"}</p>
              <p className="lg:text-xl">Ancienneté Échelon: {fonctionnaire.anciennete_echelon || "N/A"}</p>
              <p className="lg:text-xl">Indice: {fonctionnaire.indice || "N/A"}</p>
              <p className="lg:text-xl">Statut Administratif: {fonctionnaire.statut_administratif || "N/A"}</p>
              <p className="lg:text-xl">Situation Administrative: {fonctionnaire.situation_administrative || "N/A"}</p>
              <p className="lg:text-xl">Fin Période Détachement: {fonctionnaire.fin_periode_detachement || "N/A"}</p>
              <p className="lg:text-xl">Intègre Après Détachement: {fonctionnaire.integre_apres_detachement || "N/A"}</p>
              <p className="lg:text-xl">Intègre Après Mise Disposition: {fonctionnaire.integre_apres_mise_disposition || "N/A"}</p>
              <p className="lg:text-xl">Affectation: {fonctionnaire.affectation || "N/A"}</p>
              <p className="lg:text-xl">Fonction: {fonctionnaire.fonction || "N/A"}</p>
              <p className="lg:text-xl">Poste: {fonctionnaire.poste || "N/A"}</p>
              <p className="lg:text-xl">Type Sortie: {fonctionnaire.type_sortie || "N/A"}</p>
              <p className="lg:text-xl">Date Sortie: {fonctionnaire.date_sortie || "N/A"}</p>
              <p className="lg:text-xl">Administration Accueil: {fonctionnaire.administration_accueil || "N/A"}</p>
              <p className="lg:text-xl">Statut Activité: {fonctionnaire.statut_activite || "N/A"}</p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl  lg:text-2xl font-semibold mb-2">Informations Familiales</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
              <p className="lg:text-xl">Nom Pere: {fonctionnaire.nom_pere || "N/A"}</p>
              <p className="lg:text-xl">Nom Mere: {fonctionnaire.nom_mere || "N/A"}</p>
              <p className="lg:text-xl">Situation Familiale: {fonctionnaire.situation_familiale || "N/A"}</p>
              <p className="lg:text-xl">Date Mariage: {fonctionnaire.date_mariage || "N/A"}</p>
              <p className="lg:text-xl">Nom Conjoint: {fonctionnaire.nom_conjoint || "N/A"}</p>
              <p className="lg:text-xl">CIN Conjoint: {fonctionnaire.cin_conjoint || "N/A"}</p>
              <p className="lg:text-xl">Date Naissance Conjoint: {fonctionnaire.date_naissance_conjoint || "N/A"}</p>
              <p className="lg:text-xl">Fonction Conjoint: {fonctionnaire.fonction_conjoint || "N/A"}</p>
              <p className="lg:text-xl">Nombre Enfants: {fonctionnaire.nombre_enfants || "N/A"}</p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Informations  Prevoyances Sociales</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
              <p className="lg:text-xl">Organisme Retraite: {fonctionnaire.organisme_retraite || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation Retraite: {fonctionnaire.numero_affiliation_retraite || "N/A"}</p>
              <p className="lg:text-xl">Date Affiliation Retraite: {fonctionnaire.date_affiliation_retraite || "N/A"}</p>
              <p className="lg:text-xl">Organisme Prévoyance Sociale: {fonctionnaire.organisme_prevoyance_sociale || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation CNOPS: {fonctionnaire.numero_affiliation_cnops || "N/A"}</p>
              <p className="lg:text-xl">Numéro Immatriculation CNOPS: {fonctionnaire.numero_immatriculation_cnops || "N/A"}</p>
              <p className="lg:text-xl">Date Affiliation CNOPS: {fonctionnaire.date_affiliation_cnops || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation Fondation Hassan II: {fonctionnaire.numero_affiliation_fondation_hassan_ii || "N/A"}</p>
              <p className="lg:text-xl">Organisme Assurance: {fonctionnaire.organisme_assurance || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation Assurance: {fonctionnaire.numero_affiliation_assurance || "N/A"}</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl  lg:text-2xl font-semibold mb-2">Affectations</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
            <p className="lg:text-xl">Entité: {fonctionnaire.entite || "N/A"}</p>
            <p className="lg:text-xl">Date Affectation: {fonctionnaire.date_affectation ||"N/A"}</p>
            <p className="lg:text-xl">Poste: {fonctionnaire.poste || "N/A"}</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Les Diplomes</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
              <p className="lg:text-xl">Intitulé: {fonctionnaire.intitule || "N/A"}</p>
              <p className="lg:text-xl">Spécialité: {fonctionnaire.specialite || "N/A"}</p>
              <p className="lg:text-xl">Date Obtention: {fonctionnaire.date_obtention || "N/A"}</p>
              <p className="lg:text-xl">Établissement: {fonctionnaire.etablissement || "N/A"}</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl  lg:text-2xl font-semibold mb-2">Les Mouvements</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
              <p className="lg:text-xl">Administration: {fonctionnaire.administration || "N/A"}</p>
              <p className="lg:text-xl">Date de Début: {fonctionnaire.date_debut || "N/A"}</p>
              <p className="lg:text-xl">Date de Fin: {fonctionnaire.date_fin || "N/A"}</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Les  Notations</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
              <p className="lg:text-xl">Année: {fonctionnaire.annee || "N/A"}</p>
              <p className="lg:text-xl">Note: {fonctionnaire.note || "N/A"}</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md mt-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Informations de Prévoyance Sociale</h3>
              {/* <p className="lg:text-xl">CIN: {fonctionnaire.cin || "N/A"}</p> */}
              <p className="lg:text-xl">Organisme Retraite: {fonctionnaire.organisme_retraite || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation Retraite: {fonctionnaire.numero_affiliation_retraite || "N/A"}</p>
              <p className="lg:text-xl">Date Affiliation Retraite: {fonctionnaire.date_affiliation_retraite || "N/A"}</p>
              <p className="lg:text-xl">Organisme Prévoyance Sociale: {fonctionnaire.organisme_prevoyance_sociale || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation CNOPS: {fonctionnaire.numero_affiliation_cnops || "N/A"}</p>
              <p className="lg:text-xl">Numéro Immatriculation CNOPS: {fonctionnaire.numero_immatriculation_cnops || "N/A"}</p>
              <p className="lg:text-xl">Date Affiliation CNOPS: {fonctionnaire.date_affiliation_cnops || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation Fondation Hassan II: {fonctionnaire.numero_affiliation_fondation_hassan_ii || "N/A"}</p>
              <p className="lg:text-xl">Organisme Assurance: {fonctionnaire.organisme_assurance || "N/A"}</p>
              <p className="lg:text-xl">Numéro Affiliation Assurance: {fonctionnaire.numero_affiliation_assurance || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsFonctionnaires;
