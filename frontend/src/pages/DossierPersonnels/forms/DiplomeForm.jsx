import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { adddiplome} from '../../../features/DiplomeSlice';

const DilpomeForm = () =>{
  const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        cin:'',
        intitule: '',
        specialite: '',
        date_obtention: '',
        etablissement: '',
    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(adddiplome(formData));

        console.log(formData);
      };

    return(
        <>
        <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les diplômes :</h1>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-5 block w-1/2 p-2 border border-gray-300 rounded-md">
          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="intitule" className="block text-sm font-medium text-gray-700">Intitule Diplome :</label>
            <input type="text" name="intitule" id="intitule" value={formData.intitule} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="specialite" className="block text-sm font-medium text-gray-700">Specialité Diplome :</label>
            <input type="text" name="specialite" id="specialite" value={formData.specialite} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="date_obtention" className="block text-sm font-medium text-gray-700">Date obtention :</label>
            <input type="text" name="date_obtention" id="date_obtention" value={formData.date_obtention} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="etablissement" className="block text-sm font-medium text-gray-700">Établissement :</label>
            <input type="text" name="etablissement" id="etablissement" value={formData.etablissement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="rounded-lg m-6 p-6 flex items-center justify-start space-x-4">
 <div className="flex items-center">
    <FaExclamationCircle className="text-red-500 mr-2 text-2xl" />
    <span className="text-red-500 font-bold">Veuillez vérifier les informations avant de continuer</span>
    <button className="bg-cyan-400 text-white px-6 py-3 rounded ml-4 relative flex">
      <span className='pr-4'>Submit</span>
      <span className="inset-0 flex items-center justify-end pr-4">
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
export default DilpomeForm
