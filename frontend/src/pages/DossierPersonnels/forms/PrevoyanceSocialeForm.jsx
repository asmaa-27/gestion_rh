import  { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from 'react-icons/fa';

const PrevoyanceSocialeForm = () => {
  const [formData, setFormData] = useState({
    OrganismeRetraite: '',
    N_Affiliation: '',
    Date_Affiliation: '',
    OrganismePrevoyanceSociale: {
      mutuelleGeneral: false,
      omfam: false,
      mgap: false
    },
    N_Affiliation_CNOPS: '',
    N_immatriculation_CNOPS: '',
    DateAffiliation_CNOPS: '',
    N_AffiliationFondationHassan: '',
    OrganismeAssurance: '',
    N_AffiliationAssurance: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const handleChangeRadioButon = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


 return(
  <>
  <div className="flex items-center justify-center  ">
    <h1>Les informations de la prévoyance sociale :</h1>
  </div>
  <div className="flex items-center justify-center min-h-screen">
    <form onSubmit={handleSubmit} className="space-y-4 mt-1 block w-1/2 p-2 border border-gray-300 rounded-md">
    <div className="bg-white shadow-md rounded-lg m-6 p-6">
        <label className="block text-sm font-medium text-gray-700">Organisme de retraite :</label>
        <div className="flex items-center space-x-8">
          <input type="radio" id="CMR" name="OrganismeRetraite" value="CMR" checked={formData.OrganismeRetraite === 'CMR'} onChange={handleChangeRadioButon} className="form-radio text-blue-500" />
          <label htmlFor="CMR" className="text-sm text-gray-700">CMR</label>
          <input type="radio" id="RCAR" name="OrganismeRetraite" value="RCAR" checked={formData.OrganismeRetraite === 'RCAR'} onChange={handleChangeRadioButon} className="form-radio text-blue-500" />
          <label htmlFor="RCAR" className="text-sm text-gray-700">RCAR</label>
      </div>
    </div>


      <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="N_Affiliation" className="block text-sm font-medium text-gray-700">Numéro Affiliation de retraite :
</label>
          <input type="number" name="N_Affiliation" id="N_Affiliation" value={formData.N_Affiliation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="Date_Affiliation" className="block text-sm font-medium text-gray-700">Date affiliation de retraite :</label>
          <input type="date" name="Date_Affiliation" id="Date_Affiliation" value={formData.Date_Affiliation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>


        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="organismePrevoyance" className="block text-sm font-medium text-gray-700">Organisme de prévoyance sociale :</label>
          <select
            id="organismePrevoyance"
            name="organismePrevoyance"
            value={formData.organismePrevoyance}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Sélectionner un organisme</option>
            <option value="mutuelleGeneral">Mutuelle Générale</option>
            <option value="omfam">OMFAM</option>
            <option value="mgap">MGAP</option>
          </select>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="N_Affiliation_CNOPS" className="block text-sm font-medium text-gray-700">	N° affiliation CNOPS :</label>
          <input type="number" name="N_Affiliation_CNOPS" id="N_Affiliation_CNOPS" value={formData.N_Affiliation_CNOPS} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>


        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="N_immatriculation_CNOPS" className="block text-sm font-medium text-gray-700">	N° immatriculation CNOPS :</label>
          <input type="number" name="N_immatriculation_CNOPS" id="N_immatriculation_CNOPS" value={formData.N_immatriculation_CNOPS} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="DateAffiliation_CNOPS" className="block text-sm font-medium text-gray-700">Date affiliation CNOPS :</label>
          <input type="date" name="DateAffiliation_CNOPS" id="DateAffiliation_CNOPS" value={formData.DateAffiliation_CNOPS} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="N_AffiliationFondationHassan" className="block text-sm font-medium text-gray-700">	N° affiliation fondation Hassan II :</label>
          <input type="number" name="N_AffiliationFondationHassan" id="N_AffiliationFondationHassan" value={formData.N_AffiliationFondationHassan} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="OrganismeAssurance" className="block text-sm font-medium text-gray-700">Organisme assurance :</label>
          <input type="text" name="OrganismeAssurance" id="OrganismeAssurance" value={formData.OrganismeAssurance} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6  m-6 focus:border-blue-500 focus:ring-blue-500 ">
          <label htmlFor="N_AffiliationAssurance" className="block text-sm font-medium text-gray-700">	N° affiliation assurance :</label>
          <input type="number" name="N_AffiliationAssurance" id="N_AffiliationAssurance" value={formData.N_AffiliationAssurance} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
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

 )
}
export default PrevoyanceSocialeForm




