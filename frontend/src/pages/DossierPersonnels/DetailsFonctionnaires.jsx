import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showDetailsByCin } from '../../features/FontionnairesSlice';
import {FaExclamationCircle} from 'react-icons/fa'

const DetailsFonctionnaires = () => {
 const dispatch = useDispatch();
 const { cin } = useParams();

 const { loading, error ,fonctionnaires} = useSelector((state) =>
 state.fonctionnaire
);

  useEffect(() => {
    dispatch(showDetailsByCin(cin));
  }, [cin, dispatch]);

 useEffect(()=>{
    console.log('hii',fonctionnaires)
 })

 if (loading) return (<div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
 <div className="bg-white p-8 rounded-lg shadow-lg">
   <div className="flex justify-center mb-4">
     <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
   </div>
   <p className="text-gray-900 font-bold text-lg">Loading...</p>
 </div>
</div> );
  if (error)
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
if (!fonctionnaires  )
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


// const fonctionnaire = fonctionnaires.find((f) => f.cin === cin);


 return (
    <><div className="container mx-auto px-4 py-8">
      <h2>Détails du fonctionnaire :</h2>
      <table className="w-full   border-1">
      <tr className="border px-4 py-2">
            <th>ID</th>
            <th>Fonctionnaires</th>
            <th>CIN</th>
          </tr>
      <tbody>
        {
           fonctionnaires && fonctionnaires.map((fonctionnaires)=>(

          <tr key={fonctionnaires.id}>
            <td className="border px-4 py-2">{fonctionnaires.id}</td>
            <td className="border px-4 py-2">{fonctionnaires.nom}</td>
            <td className="border px-4 py-2">{fonctionnaires.cin}</td>

          </tr>

            ))
        }
        </tbody>
      </table>
    </div>
    </>
 );
};

export default DetailsFonctionnaires;
