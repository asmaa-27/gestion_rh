import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { addInfoprev} from '../../../features/PrevoyanceSocialleInfoSlice';

const PrevoyanceSocialeForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    cin:'',
    organisme_retraite: '',
    numero_affiliation_retraite: '',
    date_affiliation_retraite_retraite: '',
    organisme_prevoyance_sociale:'',
    numero_affiliation_cnops: '',
    numero_immatriculation_cnops: '',
    date_affiliation_cnops: '',
    numero_affiliation_fondation_hassan_ii:'',
    organisme_assurance: '',
    numero_affiliation_assurance: '',
  });





  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
        cin:'',
        organisme_retraite: '',
        numero_affiliation_retraite: '',
        date_affiliation_retraite_retraite: '',
        organisme_prevoyance_sociale:'',
        numero_affiliation_cnops: '',
        numero_immatriculation_cnops: '',
        date_affiliation_cnops: '',
        numero_affiliation_fondation_hassan_ii:'',
        organisme_assurance: '',
        numero_affiliation_assurance: '',
      })
    dispatch(addInfoprev(formData));

  };




 return(
  <>
  <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold  ">
    <h1>Les informations de la prévoyance sociale :</h1>
  </div>
  <div className="flex items-center justify-center min-h-screen">
    <form onSubmit={handleSubmit} className="space-y-4 mt-1 mb-5 block w-1/2 p-2 border border-gray-300 rounded-md">

    <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500  dark:bg-primary-950 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700 dark:text-white">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>
    <div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Organisme de retraite :</label>
        <select
            id="organisme_retraite"
            name="organisme_retraite"
            value={formData.organisme_retraite}
            onChange={handleChange}
            className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md"
          >
            <option value="">Sélectionner un organisme</option>
            <option value="CMR">CMR</option>
            <option value="RCAR">RCAR</option>
          </select>
    </div>


      <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500  dark:bg-primary-950 ">
          <label htmlFor="N_Affiliation" className="block text-sm font-medium text-gray-700 dark:text-white">Numéro Affiliation de retraite :
</label>
          <input type="number" name="numero_affiliation_retraite" id="numero_affiliation_retraite" value={formData.numero_affiliation_retraite} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500  dark:bg-primary-950 focus:ring-blue-500 ">
          <label htmlFor="date_affiliation_retraite" className="block text-sm font-medium text-gray-700 dark:text-white">Date affiliation de retraite :</label>
          <input type="date" name="date_affiliation_retraite" id="date_affiliation_retraite" value={formData.date_affiliation_retraite} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>


        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500  dark:bg-primary-950 focus:ring-blue-500 ">
          <label htmlFor="organisme_prevoyance_sociale" className="block text-sm font-medium text-gray-700 dark:text-white">Organisme de prévoyance sociale :</label>
          <select
            id="organisme_prevoyance_sociale"
            name="organisme_prevoyance_sociale"
            value={formData.organisme_prevoyance_sociale}
            onChange={handleChange}
            className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md"
          >
            <option value="">Sélectionner un organisme</option>
            <option value="mutuelleGeneral">Mutuelle Générale</option>
            <option value="omfam">OMFAM</option>
            <option value="mgap">MGAP</option>

          </select>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500  dark:bg-primary-950 focus:ring-blue-500 ">
          <label htmlFor="numero_affiliation_cnops" className="block text-sm font-medium text-gray-700 dark:text-white">	N° affiliation CNOPS :</label>
          <input type="number" name="numero_affiliation_cnops" id="numero_affiliation_cnops" value={formData.numero_affiliation_cnops} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>


        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500  dark:bg-primary-950 focus:ring-blue-500 ">
          <label htmlFor="numero_immatriculation_cnops" className="block text-sm font-medium text-gray-700 dark:text-white">	N° immatriculation CNOPS :</label>
          <input type="number" name="numero_immatriculation_cnops" id="numero_immatriculation_cnops" value={formData.numero_immatriculation_cnops} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500  dark:bg-primary-950 focus:ring-blue-500 ">
          <label htmlFor="date_affiliation_cnops" className="block text-sm font-medium text-gray-700 dark:text-white">Date affiliation CNOPS :</label>
          <input type="date" name="date_affiliation_cnops" id="date_affiliation_cnops" value={formData.date_affiliation_cnops} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500  dark:bg-primary-950 focus:ring-blue-500 ">
          <label htmlFor="numero_affiliation_fondation_hassan_ii" className="block text-sm font-medium text-gray-700 dark:text-white">	N° affiliation fondation Hassan II :</label>
          <input type="number" name="numero_affiliation_fondation_hassan_ii" id="numero_affiliation_fondation_hassan_ii" value={formData.numero_affiliation_fondation_hassan_ii} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500  dark:bg-primary-950 ">
          <label htmlFor="organisme_assurance" className="block text-sm font-medium text-gray-700 dark:text-white">Organisme assurance :</label>
          <input type="text" name="organisme_assurance" id="organisme_assurance" value={formData.organisme_assurance} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500  dark:bg-primary-950 focus:ring-blue-500 ">
          <label htmlFor="numero_affiliation_assurance" className="block text-sm font-medium text-gray-700 dark:text-white">	N° affiliation assurance :</label>
          <input type="number" name="numero_affiliation_assurance" id="numero_affiliation_assurance" value={formData.numero_affiliation_assurance} onChange={handleChange} className="mt-1 block w-full p-2 dark:bg-primary-800 border border-gray-300 rounded-md" required />
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

 )
}
export default PrevoyanceSocialeForm




