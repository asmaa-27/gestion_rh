import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';

const PersonalInfoForm = () => {
 const [formData, setFormData] = useState({
    cin: '',
    nom: '',
    prenom: '',
    sexe: '',
    dateNaissance: '',
    lieuNaissance: '',
    ville: '',
    commune: '',
    quartier: '',
    rue: '',
    numero: '',
    codePostal: '',
    tel: '',
    email: '',
 });

 const [uploadedFile, setUploadedFile] = useState(null);

 const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
 };

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedFile) {
      console.log('Uploaded file:', uploadedFile.name);
      // Here you would handle the file upload, e.g., send it to a server
    }
 };


 return (
  <>
    <div className="flex items-center justify-center  text-2xl font-bold"><h1>Les données personnels :</h1></div>
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 mt-1 block w-1/2 p-2 border border-gray-300 rounded-md">
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
          <input type="text" name="nom" id="nom" value={formData.nom} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
          <input type="text" name="prenom" id="prenom" value={formData.prenom} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6">
          <label className="block text-sm font-medium text-gray-700">Sexe</label>
          <div className="flex items-center space-x-8">
              <input type="radio" id="homme" name="sexe" value="homme" checked={formData.sexe === 'homme'} onChange={handleChange} className="form-radio text-blue-500" />
              <label htmlFor="homme" className="text-sm text-gray-700">Homme</label>
              <input type="radio" id="femme" name="sexe" value="femme" checked={formData.sexe === 'femme'} onChange={handleChange} className="form-radio text-blue-500" />
              <label htmlFor="femme" className="text-sm text-gray-700">Femme</label>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="dateNaissance" className="block text-sm font-medium text-gray-700">Date de naissance</label>
          <input type="date" name="dateNaissance" id="dateNaissance" value={formData.dateNaissance} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="lieuNaissance" className="block text-sm font-medium text-gray-700">Lieu de naissance</label>
          <input type="text" name="lieuNaissance" id="lieuNaissance" value={formData.lieuNaissance} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500">
 <h2 className="text-lg font-semibold mb-4">Adresse</h2>
 <div className="grid grid-cols-2 gap-4">
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500">
      <label htmlFor="ville" className="block text-sm font-medium text-gray-700">Ville</label>
      <select name="ville" id="ville" value={formData.ville} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
        <option value="agadir" className="default">Agadir</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500">
      <label htmlFor="quartier" className="block text-sm font-medium text-gray-700">Quartier</label>
      <input type="text" name="quartier" id="quartier" value={formData.quartier} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500">
      <label htmlFor="rue" className="block text-sm font-medium text-gray-700">Rue / Avenue</label>
      <input type="text" name="rue" id="rue" value={formData.rue} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500">
      <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Numéro</label>
      <input type="text" name="numero" id="numero" value={formData.numero} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 focus:border-blue-500 focus:ring-blue-500">
      <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700">Code Postal</label>
      <input type="text" name="codePostal" id="codePostal" value={formData.codePostal} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
    </div>
 </div>


        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Numéro de Téléphone</label>
          <input type="tel" name="tel" id="tel" value={formData.tel} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg m-6 p-6 focus:border-blue-500 focus:ring-blue-500 ">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
        <input type="file" name="image" id="image" onChange={handleFileChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
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
}
export default PersonalInfoForm;
