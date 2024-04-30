import  { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from "react-icons/fa";




const AdminInfoForm = () => {

 const [formData, setFormData] = useState({
    PPR: '',
    PB: '',
    dateRecrutement: '',
    diplomeRecrutement: '',
    administrationRecrutement: '',
    dateTitularisation: '',
    grade: '',
    ancienneteGrade: '',
    echelle: '',
    ancienneteEchelle: '',
    echelon: '',
    ancienneteEchelon: '',
    indice: '',
    statutAdministratif: '',
    situationAdministrative: '',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  // // Vérifier si le détachement est terminé
  // if (informations.situationAdministrative === 'Détaché sortant' && informations.boolDetachement) {
  //   // Vérifier si le détachement doit être renouvelé, prendre fin ou si le fonctionnaire doit être intégré
  //   const dateDetachement = new Date(informations.dateRecrutement);
  //   const dateFin = new Date(dateDetachement.getFullYear() + 3, dateDetachement.getMonth(), dateDetachement.getDate());
  //   const dateAujourdHui = new Date();

  //   if (dateAujourdHui >= dateFin) {
  //     // Afficher un message pour demander le renouvellement, la fin du détachement ou l'intégration
  //     if (window.confirm('Le détachement de ce fonctionnaire est terminé. Que souhaitez-vous faire ?')) {
  //       // Mettre à jour les informations administratives en conséquence
  //       setInformations({
  //         ...informations,
  //         situationAdministrative: 'Intégré',
  //         boolDetachement: false,
  //       });
  //     }
  //   }
  // }

  // // Traiter les autres informations administratives
  // console.log(informations);
  // // Ajouter ici la logique pour enregistrer les informations dans une base de données ou les envoyer à un serveur
};

 return (
    <>
     <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les informations administratives  :</h1>
        </div>

    <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-40 block w-1/2 p-2 border border-gray-300 rounded-md">

      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="PPR" className="block text-sm font-medium text-gray-700">PPR: Numéro immatriculation :</label>
        <input type="text" name="PPR" id="PPR" value={formData.PPR} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      {/* Répétez ce modèle pour chaque champ du formulaire */}
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="PB" className="block text-sm font-medium text-gray-700">N° poste budgétaire (PB) :</label>
        <input type="text" name="PB" id="PB" value={formData.PB} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="dateRecrutement" className="block text-sm font-medium text-gray-700">Date de recrutement :</label>
        <input type="date" name="dateRecrutement" id="dateRecrutement" value={formData.dateRecrutement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="diplomeRecrutement" className="block text-sm font-medium text-gray-700">Diplôme de recrutement :</label>
        <input type="text" name="diplomeRecrutement" id="diplomeRecrutement" value={formData.diplomeRecrutement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="administrationRecrutement" className="block text-sm font-medium text-gray-700">Administration de recrutement :</label>
        <input type="text" name="administrationRecrutement" id="administrationRecrutement" value={formData.administrationRecrutement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="dateTitularisation" className="block text-sm font-medium text-gray-700">Date de titularisation :</label>
        <input type="date" name="dateTitularisation" id="dateTitularisation" value={formData.dateTitularisation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade :</label>
        <input type="text" name="grade" id="grade" value={formData.grade} onChange={handleChange} className=":mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="ancienneteGrade" className="block text-sm font-medium text-gray-700">Ancienneté grade :</label>
        <input type="text" name="ancienneteGrade" id="ancienneteGrade" value={formData.ancienneteGrade} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="echelle" className="block text-sm font-medium text-gray-700">Echelle :</label>
        <input type="text" name="echelle" id="echelle" value={formData.echelle} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="ancienneteEchelle" className="block text-sm font-medium text-gray-700">Ancienneté échelle :</label>
        <input type="text" name="ancienneteEchelle" id="ancienneteEchelle" value={formData.ancienneteEchelle} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="echelon" className="block text-sm font-medium text-gray-700">Echelon :</label>
        <input type="text" name="echelon" id="echelon" value={formData.echelon} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="ancienneteEchelon" className="block text-sm font-medium text-gray-700">Ancienneté échelon :</label>
        <input type="text" name="ancienneteEchelon" id="ancienneteEchelon" value={formData.ancienneteEchelon} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="indice" className="block text-sm font-medium text-gray-700">Indice :</label>
        <input type="text" name="indice" id="indice" value={formData.indice} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="statutAdministratif" className="block text-sm font-medium text-gray-700">Statut administratif :</label>
        <input type="text" name="statutAdministratif" id="statutAdministratif" value={formData.statutAdministratif} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="situationAdministrative" className="block text-sm font-medium text-gray-700">Situation administrative :</label>
        <select name="situationAdministrative" id="situationAdministrative" value={formData.situationAdministrative} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
          <option value="">Sélectionnez un choix :</option>
          <option value="enFonction">En fonction</option>
          <option value="detacheEntrant">Détaché entrant</option>
          <option value="detacheSortant">Détaché sortant</option>
        </select>
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

export default AdminInfoForm;





