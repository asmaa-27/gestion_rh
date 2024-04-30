import  { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';

const FamilyInfoForm = () => {
 const [formData, setFormData] = useState({
    nomPere: '',
    nomMere: '',
    situationFamiliale: '',
    dateMariage: '',
    nomConjoint: '',
    cinConjoint: '',
    dateNaissanceConjoint: '',
    fonctionConjoint: '',
    nombreEnfants: '',
    listeConjoints: [{ dateMariage: '', dateDivorce: '', nomConjoint: '' }],
    listeEnfants: [{ prenom: '', nomMere: '', dateNaissance: '' }],
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
 };

 return (
  <>
    <div className="flex items-center justify-center mt-4  text-2xl font-bold"><h1>Les données Familiales :</h1></div>
    <div className="flex items-center justify-center mt-4 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 mt-1 block w-1/2 p-2 border border-gray-300 rounded-md">
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nomPere" className="block text-sm font-medium text-gray-700">Nom de père</label>
          <input type="text" name="nomPere" id="nomPere" value={formData.nomPere} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nomMere" className="block text-sm font-medium text-gray-700">Nom de la mère</label>
          <input type="text" name="nomMere" id="nomMere" value={formData.nomMere} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="situationFamiliale" className="block text-sm font-medium text-gray-700">Situation familiale</label>
          <input type="text" name="situationFamiliale" id="situationFamiliale" value={formData.situationFamiliale} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="dateMariage" className="block text-sm font-medium text-gray-700">Date de mariage</label>
          <input type="date" name="dateMariage" id="dateMariage" value={formData.dateMariage} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nomConjoint" className="block text-sm font-medium text-gray-700">Nom du conjoint</label>
          <input type="text" name="nomConjoint" id="nomConjoint" value={formData.nomConjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="cinConjoint" className="block text-sm font-medium text-gray-700">CIN du conjoint</label>
          <input type="text" name="cinConjoint" id="cinConjoint" value={formData.cinConjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="dateNaissanceConjoint" className="block text-sm font-medium text-gray-700">Date de naissance du conjoint</label>
          <input type="date" name="dateNaissanceConjoint" id="dateNaissanceConjoint" value={formData.dateNaissanceConjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="fonctionConjoint" className="block text-sm font-medium text-gray-700">La fonction du conjoint</label>
          <input type="text" name="fonctionConjoint" id="fonctionConjoint" value={formData.fonctionConjoint} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <label htmlFor="nombreEnfants" className="block text-sm font-medium text-gray-700">Nombre d’enfants</label>
          <input type="number" name="nombreEnfants" id="nombreEnfants" value={formData.nombreEnfants} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>






        <div className="rounded-lg m-6 p-6 flex items-center justify-start space-x-4">
 <div className="flex items-center">
    <FaExclamationCircle className="text-red-500 mr-2 text-2xl" />
    <span className="text-red-500 font-bold">Veuillez vérifier les informations avant de continuer</span>
    <button className="bg-green-500 text-white px-6 py-3 rounded ml-4 relative flex">
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
