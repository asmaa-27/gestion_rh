import { useState } from 'react';
import { FaExclamationCircle, FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addInfoAdmin } from '../../../features/AdminInfoSlice';

const AdminInfoForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        cin: '',
        ppr: '',
        numero_poste_budgetaire: '',
        date_recrutement: '',
        diplome_recrutement: '',
        administration_recrutement: '',
        date_titularisation: '',
        grade: '',
        anciennete_grade: '',
        echelle: '',
        anciennete_echelle: '',
        echelon: '',
        anciennete_echelon: '',
        indice: '',
        statut_administratif: '',
        situation_administrative: '',
        fin_periode_detachement: '',
        integre_apres_detachement: false,
        integre_apres_mise_disposition: false,
        affectation: '',
        fonction: '',
        poste: '',
        type_sortie: '',
        date_sortie: '',
        administration_accueil: '',
        statut_activite: '',
    });

    const handleChange = (e) => {
      const { name, value, checked } = e.target;
      const newValue =  e.target.type === 'radio'? checked : value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifier si le détachement est terminé
        // if (formData.situation_administrative === 'detacheSortant') {
        //     const dateDetachement = new Date(formData.date_recrutement);
        //     const dateFin = new Date(dateDetachement.getFullYear() + 3, dateDetachement.getMonth(), dateDetachement.getDate());
        //     const dateAujourdHui = new Date();

        //     if (dateAujourdHui >= dateFin) {
        //         // Afficher un message pour demander le renouvellement, la fin du détachement ou l'intégration
        //         if (window.confirm('Le détachement de ce fonctionnaire est terminé. Que souhaitez-vous faire?')) {
        //             // Mettre à jour les informations administratives en conséquence
        //             setFormData({
        //                 ...formData,
        //                 situation_administrative: 'Integre',
        //                 integre_apres_detachement: true,
        //             });
        //         }
        //     }
        // }

        // Envoyer les données au Redux store
        dispatch(addInfoAdmin(formData));
    };

 return (
    <>
     <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les informations administratives  :</h1>
        </div>

    <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-5 block w-1/2 p-2 border border-gray-300 rounded-md">

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700 dark:text-white">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>

      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="ppr" className="block text-sm font-medium text-gray-700 dark:text-white"> Numéro immatriculation :</label>
        <input type="text" name="ppr" id="ppr" value={formData.ppr} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="numero_poste_budgetaire" className="block text-sm font-medium text-gray-700 dark:text-white">N° poste budgétaire (numero_poste_budgetaire) :</label>
        <input type="text" name="numero_poste_budgetaire" id="numero_poste_budgetaire" value={formData.numero_poste_budgetaire} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="date_recrutement" className="block text-sm font-medium text-gray-700 dark:text-white">Date de recrutement :</label>
        <input type="date" name="date_recrutement" id="date_recrutement" value={formData.date_recrutement} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="diplome_recrutement" className="block text-sm font-medium text-gray-700 dark:text-white">Diplôme de recrutement :</label>
        <input type="text" name="diplome_recrutement" id="diplome_recrutement" value={formData.diplome_recrutement} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="administration_recrutement" className="block text-sm font-medium text-gray-700 dark:text-white">Administration de recrutement :</label>
        <input type="text" name="administration_recrutement" id="administration_recrutement" value={formData.administration_recrutement} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="date_titularisation" className="block text-sm font-medium text-gray-700 dark:text-white">Date de titularisation :</label>
        <input type="date" name="date_titularisation" id="date_titularisation" value={formData.date_titularisation} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 dark:text-white">Grade :</label>
        <input type="number" name="grade" id="grade" value={formData.grade} onChange={handleChange} className=":mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="anciennete_grade" className="block text-sm font-medium text-gray-700 dark:text-white">Ancienneté grade :</label>
        <input type="number" name="anciennete_grade" id="anciennete_grade" value={formData.anciennete_grade} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="echelle" className="block text-sm font-medium text-gray-700 dark:text-white">Echelle :</label>
        <input type="number" name="echelle" id="echelle" value={formData.echelle} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="anciennete_echelle" className="block text-sm font-medium text-gray-700 dark:text-white">Ancienneté échelle :</label>
        <input type="number" name="anciennete_echelle" id="anciennete_echelle" value={formData.anciennete_echelle} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="echelon" className="block text-sm font-medium text-gray-700 dark:text-white">echelon :</label>
        <input type="number" name="echelon" id="echelon" value={formData.echelon} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="anciennete_echelon" className="block text-sm font-medium text-gray-700 dark:text-white">Ancienneté échelon :</label>
        <input type="number" name="anciennete_echelon" id="anciennete_echelon" value={formData.anciennete_echelon} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="indice" className="block text-sm font-medium text-gray-700 dark:text-white">Indice :</label>
        <input type="text" name="indice" id="indice" value={formData.indice} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="statut_administratif" className="block text-sm font-medium text-gray-700 dark:text-white">Statut administrative :</label>
        <input type="text" name="statut_administratif" id="statut_administratif" value={formData.statut_administratif} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950">
        <label htmlFor="situation_administrative" className="block text-sm font-medium text-gray-700 dark:text-white">Situation administrative :</label>
        <select name="situation_administrative" id="situation_administrative" value={formData.situation_administrative} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md">
          <option value="">Sélectionnez un choix :</option>
          <option value="enFonction">En fonction</option>
          <option value="detacheEntrant">Détaché entrant</option>
          <option value="detacheSortant">Détaché sortant</option>
        </select>
      </div>
      <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="fin_periode_detachementv" className="block text-sm font-medium text-gray-700 dark:text-white">fin_periode_detachement</label>
          <input type="date" name="fin_periode_detachementv" id="fin_periode_detachementv" value={formData.fin_periode_detachementv} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"  />
        </div>
       
{/* <div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
    <label className="block text-sm font-medium text-gray-700 dark:text-white">Intégré après détachement</label>
    <div className="flex items-center space-x-8">
        <input type="checkbox" id="integre_apres_detachement" name="integre_apres_detachement" checked={formData.integre_apres_detachement} onChange={handleChange} className="form-radio text-blue-500" />
        <label htmlFor="integre_apres_detachement" className="text-sm text-gray-700 dark:text-white">true</label>
    </div>
</div> */}

<div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
  <label className="block text-sm font-medium text-gray-700 dark:text-white">Intégré après détachement</label>
  <div className="flex items-center space-x-8">
    <input type="radio" id="integre_apres_detachement_true" name="integre_apres_detachement" value="true" checked={formData.integre_apres_detachement === 'true'} onChange={handleChange} className="form-radio text-blue-500" />
    <label htmlFor="integre_apres_detachement_true" className="text-sm text-gray-700 dark:text-white">true</label>
    <input type="radio" id="integre_apres_detachement_false" name="integre_apres_detachement" value="false" checked={formData.integre_apres_detachement === 'false'} onChange={handleChange} className="form-radio text-blue-500" />
    <label htmlFor="integre_apres_detachement_false" className="text-sm text-gray-700 dark:text-white">false</label>
  </div>
</div>

<div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">Intégré après mise disposition</label>
              <div className="flex items-center space-x-8">
                <input type="radio" id="integre_apres_mise_disposition_true" name="integre_apres_mise_disposition" value="true" checked={formData.integre_apres_mise_disposition === 'true'} onChange={handleChange} className="form-radio text-blue-500" />
                <label htmlFor="integre_apres_mise_disposition_true" className="text-sm text-gray-700 dark:text-white">true</label>
                <input type="radio" id="integre_apres_mise_disposition_false" name="integre_apres_mise_disposition" value="false" checked={formData.integre_apres_mise_disposition === 'false'} onChange={handleChange} className="form-radio text-blue-500" />
                <label htmlFor="integre_apres_mise_disposition_false" className="text-sm text-gray-700 dark:text-white">false</label>
              </div>
            </div>
{/* <div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
  <label className="block text-sm font-medium text-gray-700 dark:text-white">Intégré après détachement</label>
  <div className="flex items-center space-x-8">
    <input 
      type="checkbox" 
      name="integre_apres_detachement" 
      checked={formData.integre_apres_detachement} 
      onChange={(e) => handleChange(e)} 
      className="form-radio text-blue-500" 
    />
    <label htmlFor="integre_apres_detachement" className="text-sm text-gray-700 dark:text-white">true</label>
  </div>
</div>
<div className="bg-white shadow-md rounded-lg m-6 p-6 dark:bg-primary-950">
  <label className="block text-sm font-medium text-gray-700 dark:text-white">Intégré après mise disposition</label>
  <div className="flex items-center space-x-8">
    <input 
      type="checkbox" 
      name="integre_apres_mise_disposition" 
      checked={formData.integre_apres_mise_disposition} 
      onChange={(e) => handleChange(e)} 
      className="form-radio text-blue-500" 
    />
    <label htmlFor="integre_apres_mise_disposition" className="text-sm text-gray-700 dark:text-white">true</label>
  </div>
</div> */}


     
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="affectation" className="block text-sm font-medium text-gray-700 dark:text-white">affectation</label>
          <input type="text" name="affectation" id="affectation" value={formData.affectation} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="fonction" className="block text-sm font-medium text-gray-700 dark:text-white">fonction</label>
          <input type="text" name="fonction" id="fonction" value={formData.fonction} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="poste" className="block text-sm font-medium text-gray-700 dark:text-white">poste</label>
          <input type="textarea" name="poste" id="poste" value={formData.poste} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="type_sortie" className="block text-sm font-medium text-gray-700 dark:text-white">type de sortie</label>
          <input type="text" name="type_sortie" id="type_sortie" value={formData.type_sortie} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="date_sortie" className="block text-sm font-medium text-gray-700 dark:text-white">date de sortie</label>
          <input type="date" name="date_sortie" id="date_sortie" value={formData.date_sortie} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md"  />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="administration_accueil" className="block text-sm font-medium text-gray-700 dark:text-white">administration_accueil</label>
          <input type="text" name="administration_accueil" id="administration_accueil" value={formData.administration_accueil} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 dark:bg-primary-950 ">
          <label htmlFor="statut_activite" className="block text-sm font-medium text-gray-700 dark:text-white">statut activite</label>
          <input type="text" name="statut_activite" id="statut_activite" value={formData.statut_activite} onChange={handleChange} className="mt-1 block w-full dark:bg-primary-800 p-2 border border-gray-300 rounded-md" required />
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
};

export default AdminInfoForm;





