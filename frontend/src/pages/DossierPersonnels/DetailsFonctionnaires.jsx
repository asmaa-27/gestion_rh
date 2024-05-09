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
            <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Personnel</h3>
              {fonctionnaires && fonctionnaires.map((fonctionnaire) => (
                <Fragment key={fonctionnaire.id}>
                  <p>{fonctionnaire.id}</p>
                  <p>{fonctionnaire.nom}</p>
                </Fragment>
              ))}
            </div>
            <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Demande Absence</h3>
              {fonctionnaires && fonctionnaires.map((fonctionnaire) => (
  <Fragment key={fonctionnaire.id}>
    <p>{fonctionnaire.notations.annee}</p>
    <p>{fonctionnaire.notations.note}</p>
  </Fragment>
))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsFonctionnaires;
