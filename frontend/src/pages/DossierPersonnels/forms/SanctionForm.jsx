import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { addSanction} from '../../../features/SanctionSlice';

const SanctionForm = () =>{
  const dispatch = useDispatch();

    const [formData, setFormData] = useState({
      cin:'',
        date_sanction: '',
        motif: '',
        nature_sanction: '',
        sanction:'',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSanction(formData));

      };

    return(
        <>
        <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les sanctions  :</h1>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-7 block w-1/2 p-2 border border-gray-300 rounded-md">

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500  dark:bg-primary-950 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700 dark:text-white">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500  dark:bg-primary-950 ">
          <label htmlFor="date_sanction" className="block text-sm font-medium text-gray-700 dark:text-white">Date Motif :</label>
          <input type="date" name="date_sanction" id="date_sanction" value={formData.date_sanction} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500  dark:bg-primary-950 ">
          <label htmlFor="motif" className="block text-sm font-medium text-gray-700 dark:text-white">Motif :</label>
          <input type="text" name="motif" id="motif" value={formData.motif} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500  dark:bg-primary-950 ">
          <label htmlFor="nature_sanction" className="block text-sm font-medium text-gray-700 dark:text-white">nature sanction :</label>
          <input type="text" name="nature_sanction" id="nature_sanction" value={formData.nature_sanction} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500  dark:bg-primary-950">
            <label htmlFor="sanction" className="block text-sm font-medium text-gray-700 dark:text-white">Sanction :</label>
            <textarea name="sanction" id="sanction" value={formData.sanction} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md resize-none" required></textarea>
        </div>


        <div className="rounded-lg m-6 p-6 flex items-center justify-start space-x-4">
 <div className="flex items-center">
    <FaExclamationCircle className="text-red-500 mr-2 text-2xl" />
    <span className="text-red-500 font-bold">Veuillez vérifier les informations avant de continuer</span>
    <button className="bg-cyan-400 text-white px-6 py-3 rounded ml-4 relative flex">
      <span className='pr-4'>Soumettre</span>
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
export default SanctionForm
