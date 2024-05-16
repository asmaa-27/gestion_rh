import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showDetailsByCin } from '../../features/FontionnairesSlice';
import { FaExclamationCircle } from 'react-icons/fa';

const DetailsFonctionnaires = () => {
  const dispatch = useDispatch();
  const { cin } = useParams();

  const { loading, error, fonctionnaires } = useSelector((state) => state.fonctionnaire);

  useEffect(() => {
    dispatch(showDetailsByCin(cin));
  }, [cin, dispatch]);

  useEffect(() => {
    console.log('hii', fonctionnaires);
  }, [fonctionnaires]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-900 font-bold text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-red-500 text-4xl mb-4">
            <FaExclamationCircle />
          </div>
          <p className="text-gray-900 font-bold">{error}</p>
        </div>
      </div>
    );
  }

  if (!fonctionnaires) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-red-500 text-4xl mb-4">
            <FaExclamationCircle />
          </div>
          <p className="text-gray-900 font-bold">Fonctionnaire not found</p>
        </div>
      </div>
    );
  }

  return (
    <>
     <div className="container mx-auto px-4 py-8">
      <h2>Détails du fonctionnaire :</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {fonctionnaires.map((fonctionnaire) => (
              <Fragment key={fonctionnaire.cin}>
                <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Personnel</h3>
                  <p>CIN: {fonctionnaire.cin}</p>
                  <p>Nom: {fonctionnaire.nom}</p>
                  <p>Prénom: {fonctionnaire.prenom}</p>
                  <p>Sexe: {fonctionnaire.sexe}</p>
                  <p>Date de Naissance: {fonctionnaire.date_naissance}</p>
                  <p>Lieu de Naissance: {fonctionnaire.lieu_naissance}</p>
                  <p>Email: {fonctionnaire.email}</p>
                  <p>Téléphone: {fonctionnaire.telephone}</p>
                  <p>Adresse: {fonctionnaire.numeroRue} {fonctionnaire.rue}, {fonctionnaire.quartier}, {fonctionnaire.ville} {fonctionnaire.codePostal}</p>
                </div>

                <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Informations Administratives</h3>
                  <p>PPR: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.ppr : "N/A"}</p>
                  <p>Date Recrutement: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.date_recrutement : "N/A"}</p>
                  <p>Date Titularisation: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.date_titularisation : "N/A"}</p>
                  <p>Situation Administrative: {fonctionnaire.informations_administratives ? fonctionnaire.informations_administratives.situation_administrative : "N/A"}</p>
                </div>

                <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Informations Familiales</h3>
                  <p>Nom du Père: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nom_pere : "N/A"}</p>
                  <p>Nom de la Mère: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nom_mere : "N/A"}</p>
                  <p>Situation Familiale: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.situation_familiale : "N/A"}</p>
                  <p>Nom du Conjoint: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nom_conjoint : "N/A"}</p>
                  <p>Nombre d Enfants: {fonctionnaire.informations_familiales ? fonctionnaire.informations_familiales.nombre_enfants : "N/A"}</p>
                </div>


            </Fragment>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default DetailsFonctionnaires;
