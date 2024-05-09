import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { addInfoPersonnel } from '../../../features/PersonallInfoSlice';

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  // const [uploadedFile, setUploadedFile] = useState(null);
 const [formData, setFormData] = useState({
    cin: '',
    nom: '',
    prenom: '',
    sexe: '',
    date_naissance: '',
    lieu_naissance: '',
    ville: '',
    quartier: '',
    rue: '',
    numeroRue: '',
    codePostal: '',
    telephone: '',
    email: '',
    image:null,
 });


 const handleInputChange = (event) => {
  const { name, type, value, files } = event.target;


  // Handle file inputs
  if (type === "file") {
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0], // Assuming single file upload
    }));
  } else {
    // Handle text and select inputs
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Update the formData with the combined centroide values
  }}

 const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      cin: '',
      nom: '',
      prenom: '',
      sexe: '',
      date_naissance: '',
      lieu_naissance: '',
      ville: '',
      quartier: '',
      rue: '',
      numeroRue: '',
      codePostal: '',
      telephone: '',
      email: '',
      image:null,
    })
    dispatch(addInfoPersonnel(formData));

 };



 return (
  <>
    <div className="flex items-center justify-center  text-2xl font-bold"><h1>Les informations  personnels :</h1></div>
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 mb-5 mt-1 block w-1/2 p-2 border border-gray-300  rounded-md">
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700 dark:text-white dark:text-white">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950 ">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 dark:text-white">Nom</label>
          <input type="text" name="nom" id="nom" value={formData.nom} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950 ">
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 dark:text-white">Prénom</label>
          <input type="text" name="prenom" id="prenom" value={formData.prenom} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
  <label className="block text-sm font-medium text-gray-700 dark:text-white">Sexe</label>
  <div className="flex items-center space-x-8">
    <input type="radio" id="homme" name="sexe" value="Homme" checked={formData.sexe === 'Homme'} onChange={handleInputChange} className="form-radio text-blue-500" />
    <label htmlFor="homme" className="text-sm text-gray-700 dark:text-white">Homme</label>
    <input type="radio" id="femme" name="sexe" value="Femme" checked={formData.sexe === 'Femme'} onChange={handleInputChange} className="form-radio text-blue-500" />
    <label htmlFor="femme" className="text-sm text-gray-700 dark:text-white">Femme</label>
  </div>
</div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950 ">
          <label htmlFor="date_naissance" className="block text-sm font-medium text-gray-700 dark:text-white">Date de naissance</label>
          <input type="date" name="date_naissance" id="date_naissance" value={formData.date_naissance} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950 ">
          <label htmlFor="lieu_naissance" className="block text-sm font-medium text-gray-700 dark:text-white">Lieu de naissance</label>
          <input type="text" name="lieu_naissance" id="lieu_naissance" value={formData.lieu_naissance} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950">
 <h2 className="text-lg font-semibold mb-4">Adresse</h2>
 <div className="grid grid-cols-2 gap-4">
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950">
      <label htmlFor="ville" className="block text-sm font-medium text-gray-700 dark:text-white">Ville</label>
      <select name="ville" id="ville" value={formData.ville} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md">
        <option selected>Vous devez selectionner une ville</option>
        <option value="agadir" > Agadir</option>
      </select>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950">
      <label htmlFor="rue" className="block text-sm font-medium text-gray-700 dark:text-white">Rue / Avenue</label>
      <input type="text" name="rue" id="rue" value={formData.rue} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950">
      <label htmlFor="numeroRue" className="block text-sm font-medium text-gray-700 dark:text-white">Numéro</label>
      <input type="number" name="numeroRue" id="numeroRue" value={formData.numeroRue} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950">
      <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 dark:text-white">Code Postal</label>
      <input type="text" name="codePostal" id="codePostal" value={formData.codePostal} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
    </div>
 </div>


        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950 ">
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 dark:text-white">Numéro de Téléphone</label>
          <input type="telephone" name="telephone" id="telephone" value={formData.telephone} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950 ">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 dark:bg-primary-950 ">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-white">Image</label>
        <input type="file" name="image" id="image" onChange={handleInputChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>


      <div className="rounded-lg m-6 p-6 flex items-center justify-start space-x-4">
 <div className="flex items-center">
    <FaExclamationCircle className="text-red-500 mr-2 text-2xl" />
    <span className="text-red-500 font-bold">Veuillez vérifier les informations avant de continuer</span>
    <button  type='submit' className="bg-cyan-400 text-white px-6 py-3 rounded ml-4 relative flex">
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
export default PersonalInfoForm ;
