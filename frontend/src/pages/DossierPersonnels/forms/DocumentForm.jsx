import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { Addocument} from '../../../features/DocumentSlice';
const DocumentForm = () => {
    const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    type: '',
    cin: '',
    chemin: null,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
        type: '',
        cin: '',
        chemin: null,
      });
    dispatch(Addocument(formData));

    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, type, value, files } = event.target;

    if (type === "file") {
      setFormData((prevState) => ({
      ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
      ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>






    <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les affectations  :</h1>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-1 block w-1/2 p-2 border border-gray-300 rounded-md px-6">

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-white">type</label>
          <select id="type" name="type" value={formData.type} onChange={handleInputChange} className="mt-1 block w-full py-2 px-3 border  dark:bg-primary-800 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option selected > vous devez  selectionner un type </option>
            <option>Dossier familial</option>
            <option>Dossier administratif</option>
            <option>Dossier de la prévoyance sociale</option>
            <option>Dossier notations</option>
            <option>Dossier affectations</option>
            <option>Dossier autorisations absences</option>
            <option>Dossier Divers</option>
          </select>
        </div>

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700  dark:text-white">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleInputChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="chemin" className="block text-sm font-medium text-gray-700  dark:text-white">Chemin</label>
        <input id="chemin" name="chemin" type="file" onChange={handleInputChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white  dark:bg-primary-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
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
};

export default DocumentForm;
