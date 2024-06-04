import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { addMouvement} from '../../../features/MouvementSlice';

const MouvementForm = () =>{
  const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        cin:'',
        administration: '',
        date_debut: '',
        date_fin: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            cin:'',
            administration: '',
            date_debut: '',
            date_fin: '',
        })
        dispatch(addMouvement(formData));

        console.log(formData);
      };
    return(
        <>
        <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les mouvements  :</h1>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-1 block w-1/2 p-2 border w-full sm:w-3/4 md:w-2/3 lg:w-1/2 border-gray-300 rounded-md px-6">

          <div className="bg-white shadow-md rounded-lg dark:bg-primary-950  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700 dark:text-white">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>


          <div className="bg-white shadow-md rounded-lg dark:bg-primary-950  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="administration" className="block text-sm font-medium text-gray-700 dark:text-white">administration :</label>
          <input type="text" name="administration" id="administration" value={formData.administration} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg dark:bg-primary-950  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="date_debut" className="block text-sm font-medium text-gray-700 dark:text-white">Date Debut :</label>
          <input type="date" name="date_debut" id="date_debut" value={formData.date_debut} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg dark:bg-primary-950  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="date_fin" className="block text-sm font-medium text-gray-700 dark:text-white">Date Fin :</label>
          <input type="date" name="date_fin" id="date_fin" value={formData.date_fin} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="rounded-lg m-6 p-6 flex items-center justify-start space-x-4">
 <div className="flex items-center">
    <FaExclamationCircle className="text-red-500 mr-2 text-2xl" />
    <span className="text-red-500 font-bold">Veuillez vérifier les informations avant de continuer</span>
    <button className="bg-cyan-400 text-white px-6 py-3 rounded ml-4 relative flex">
       <span className="inset-0 flex items-center justify-end  ">
        <FaRegCheckCircle className="text-2xl" />
      </span>
    </button>
 </div>
</div>
          </form>
    </div>
    </>

    );
}
export default MouvementForm
