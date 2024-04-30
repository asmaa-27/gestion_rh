import {useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchInfoById } from '../redux/slices/InformationsSlice';

const DetailsFonctionnaires = () => {

  const [fonctionnaire, setFonctionnaire] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
 const { cin } = useParams();
//  const dispatch = useDispatch();
//  const { fonctionnaire, loading, error } = useSelector((state) => state.InformationsReducer);

 useEffect(() => {
  const fetchFonctionnaire = async () => {
     try {
       setLoading(true);
       const response = await fetch(`http://localhost:3000/api/fonctionnaires/${cin}`);
       if (!response.ok) {
         throw new Error('Erreur lors de la récupération des détails du fonctionnaire');
       }
       const data = await response.json();
       setFonctionnaire(data);
     } catch (error) {
       setError(error.message);
     } finally {
       setLoading(false);
     }
  };

  fetchFonctionnaire();
 }, [cin]); // Dépendance sur l'ID pour refaire la requête si l'ID change

 if (loading) return <div>Loading...</div>;
 if (error) return <div>Error: {error}</div>;
 if (!fonctionnaire) return <div>Fonctionnaire non trouvé</div>;

 return (
    <div className="container mx-auto px-4 py-8">
      <h2>Détails du fonctionnaire :</h2>
      <table className="w-full border-collapse border">
        <tbody>
          <tr>
            <td className="border px-4 py-2">ID :</td>
            <td className="border px-4 py-2">{fonctionnaire.id}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Nom :</td>
            <td className="border px-4 py-2">{fonctionnaire.nom}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Prénom :</td>
            <td className="border px-4 py-2">{fonctionnaire.prenom}</td>
          </tr>
        </tbody>
      </table>
    </div>
 );
};

export default DetailsFonctionnaires;
