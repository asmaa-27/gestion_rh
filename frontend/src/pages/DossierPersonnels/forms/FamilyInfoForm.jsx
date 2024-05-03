import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { addInfofamily} from '../../../features/FamilyInfoSlice';


const FamilyInfoForm = () => {
  const dispatch = useDispatch();

 const [formData, setFormData] = useState({
    id:'',
    nom_pere: '',
    nom_mere: '',
    situation_familiale: '',
    date_mariage: '',
    nom_conjoint: '',
    cin_conjoint: '',
    date_naissance_conjoint: '',
    fonction_conjoint: '',
    nombre_enfants: '',
    conjoints: [{ date_mariage: '', date_divorce: '', nom_conjoint: '' }],
    enfants: [{ prenom_enfant: '', nom_mere: '', date_naissance: '' }],
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setFormData({
    id:'',
    nom_pere: '',
    nom_mere: '',
    situation_familiale: '',
    date_mariage: '',
    nom_conjoint: '',
    cin_conjoint: '',
    date_naissance_conjoint: '',
    fonction_conjoint: '',
    nombre_enfants: '',
    conjoints: [{ date_mariage: '', date_divorce: '', nom_conjoint: '' }],
    enfants: [{ prenom: '', nom_mere: '', date_naissance: '' }],
  });
  dispatch(addInfofamily(formData));
};

 return (
  <>
    <div className="flex items-center justify-center mt-4  text-2xl font-bold"><h1>Les informations Familiales :</h1></div>
    <div className="flex items-center justify-center mt-4 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 mt-1 mb-5   block w-1/2 p-2 border border-gray-300 rounded-md">
      <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700">CIN de Fonctionnaire</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nom_pere" className="block text-sm font-medium text-gray-700">Nom de père</label>
          <input type="text" name="nom_pere" id="nom_pere" value={formData.nom_pere} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nom_mere" className="block text-sm font-medium text-gray-700">Nom de la mère</label>
          <input type="text" name="nom_mere" id="nom_mere" value={formData.nom_mere} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="situation_familiale" className="block text-sm font-medium text-gray-700">Situation familiale</label>
          <input type="text" name="situation_familiale" id="situation_familiale" value={formData.situation_familiale} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="date_mariage" className="block text-sm font-medium text-gray-700">Date de mariage</label>
          <input type="date" name="date_mariage" id="date_mariage" value={formData.date_mariage} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nom_conjoint" className="block text-sm font-medium text-gray-700">Nom du conjoint</label>
          <input type="text" name="nom_conjoint" id="nom_conjoint" value={formData.nom_conjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="cin_conjoint" className="block text-sm font-medium text-gray-700">CIN du conjoint</label>
          <input type="text" name="cin_conjoint" id="cin_conjoint" value={formData.cin_conjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="date_naissance_conjoint" className="block text-sm font-medium text-gray-700">Date de naissance du conjoint</label>
          <input type="date" name="date_naissance_conjoint" id="date_naissance_conjoint" value={formData.date_naissance_conjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="fonction_conjoint" className="block text-sm font-medium text-gray-700">La fonction du conjoint</label>
          <input type="text" name="fonction_conjoint" id="fonction_conjoint" value={formData.fonction_conjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nombre_enfants" className="block text-sm font-medium text-gray-700">Nombre enfants</label>
          <input type="number" name="nombre_enfants" id="nombre_enfants" value={formData.nombre_enfants} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="enfants.prenom_enfant" className="block text-sm font-medium text-gray-700">Prenom enfants</label>
          <input type="text" name="enfants.prenom_enfant" id="enfants.prenom_enfant" value={formData.enfants.prenom_enfant} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="enfants.nom_mere" className="block text-sm font-medium text-gray-700">Nom de mere des enfants</label>
          <input type="text" name="enfants.nom_mere" id="enfants.nom_mere" value={formData.enfants.nom_mere} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="enfants.date_naissance" className="block text-sm font-medium text-gray-700">Date naissance des enfants</label>
          <input type="date" name="enfants.date_naissance" id="enfants.date_naissance" value={formData.enfants.date_naissance} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="conjoints.date_mariage" className="block text-sm font-medium text-gray-700">Date mariage</label>
          <input type="date" name="conjoints.date_mariage" id="conjoints.date_mariage" value={formData.conjoints.date_mariage} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="conjoints.date_divorce" className="block text-sm font-medium text-gray-700">Date Divorce </label>
          <input type="date" name="conjoints.date_divorce" id="conjoints.date_divorce" value={formData.conjoints.date_divorce} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"  />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="conjoints.nom_conjoint" className="block text-sm font-medium text-gray-700">nom_conjoint</label>
          <input type="text" name="conjoints.nom_conjoint" id="conjoints.nom_conjoint" value={formData.conjoints.nom_conjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
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
};

export default FamilyInfoForm;
