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
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addInfoAdmin(formData));

    // Vérifier si le détachement est terminé
    if (formData.situation_administrative === 'Détaché sortant') {
      const dateDetachement = new Date(formData.date_recrutement);
      const dateFin = new Date(dateDetachement.getFullYear() + 3, dateDetachement.getMonth(), dateDetachement.getDate());
      const dateAujourdHui = new Date();

      if (dateAujourdHui >= dateFin) {
        // Afficher un message pour demander le renouvellement, la fin du détachement ou l'intégration
        if (window.confirm('Le détachement de ce fonctionnaire est terminé. Que souhaitez-vous faire?')) {
          // Mettre à jour les informations administratives en conséquence
          setFormData({
           ...formData,
            situation_administrative: 'Intégré',
            integre_apres_detachement: true,
          });
        }
      }
    }
  };

 return (
    <>
     <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les informations administratives  :</h1>
        </div>

    <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-5 block w-1/2 p-2 border border-gray-300 rounded-md">

          <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="cin" className="block text-sm font-medium text-gray-700">CIN</label>
          <input type="text" name="cin" id="cin" value={formData.cin} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="ppr" className="block text-sm font-medium text-gray-700">ppr: Numéro immatriculation :</label>
        <input type="text" name="ppr" id="ppr" value={formData.ppr} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="numero_poste_budgetaire" className="block text-sm font-medium text-gray-700">N° poste budgétaire (numero_poste_budgetaire) :</label>
        <input type="text" name="numero_poste_budgetaire" id="numero_poste_budgetaire" value={formData.numero_poste_budgetaire} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="date_recrutement" className="block text-sm font-medium text-gray-700">Date de recrutement :</label>
        <input type="date" name="date_recrutement" id="date_recrutement" value={formData.date_recrutement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="diplome_recrutement" className="block text-sm font-medium text-gray-700">Diplôme de recrutement :</label>
        <input type="text" name="diplome_recrutement" id="diplome_recrutement" value={formData.diplome_recrutement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="administration_recrutement" className="block text-sm font-medium text-gray-700">Administration de recrutement :</label>
        <input type="text" name="administration_recrutement" id="administration_recrutement" value={formData.administration_recrutement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="date_titularisation" className="block text-sm font-medium text-gray-700">Date de titularisation :</label>
        <input type="date" name="date_titularisation" id="date_titularisation" value={formData.date_titularisation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade :</label>
        <input type="text" name="grade" id="grade" value={formData.grade} onChange={handleChange} className=":mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="anciennete_grade" className="block text-sm font-medium text-gray-700">Ancienneté grade :</label>
        <input type="text" name="anciennete_grade" id="anciennete_grade" value={formData.anciennete_grade} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="echelle" className="block text-sm font-medium text-gray-700">Echelle :</label>
        <input type="text" name="echelle" id="echelle" value={formData.echelle} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="anciennete_echelle" className="block text-sm font-medium text-gray-700">Ancienneté échelle :</label>
        <input type="text" name="anciennete_echelle" id="anciennete_echelle" value={formData.anciennete_echelle} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="echelon" className="block text-sm font-medium text-gray-700">echelon :</label>
        <input type="text" name="echelon" id="echelon" value={formData.echelon} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="anciennete_echelon" className="block text-sm font-medium text-gray-700">Ancienneté échelon :</label>
        <input type="text" name="anciennete_echelon" id="anciennete_echelon" value={formData.anciennete_echelon} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="indice" className="block text-sm font-medium text-gray-700">Indice :</label>
        <input type="text" name="indice" id="indice" value={formData.indice} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="statut_administratif" className="block text-sm font-medium text-gray-700">Statut administratif :</label>
        <input type="text" name="statut_administratif" id="statut_administratif" value={formData.statut_administratif} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="situation_administrative" className="block text-sm font-medium text-gray-700">Situation administrative :</label>
        <select name="situation_administrative" id="situation_administrative" value={formData.situation_administrative} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
          <option value="">Sélectionnez un choix :</option>
          <option value="enFonction">En fonction</option>
          <option value="detacheEntrant">Détaché entrant</option>
          <option value="detacheSortant">Détaché sortant</option>
        </select>
      </div>
      <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="fin_periode_detachementv" className="block text-sm font-medium text-gray-700">fin_periode_detachementv</label>
          <input type="date" name="fin_periode_detachementv" id="fin_periode_detachementv" value={formData.fin_periode_detachementv} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"  />
        </div>

        <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="integre_apres_detachement" className="block text-sm font-medium text-gray-700">Situation administrative :</label>
        <select name="integre_apres_detachement" id="integre_apres_detachement" value={formData.integre_apres_detachement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
          <option value="">Sélectionnez un choix :</option>
          <option value="enFonction">vrai</option>
          <option value="detacheEntrant">faux</option>
        </select>
      </div>

      <div  className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500">
        <label htmlFor="integre_apres_mise_disposition" className="block text-sm font-medium text-gray-700">integration apres disposiion :</label>
        <select name="integre_apres_mise_disposition" id="integre_apres_mise_disposition" value={formData.integre_apres_mise_disposition} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
          <option value="">Sélectionnez un choix :</option>
          <option value="enFonction">vrai</option>
          <option value="detacheEntrant">faux</option>
        </select>
      </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="affectation" className="block text-sm font-medium text-gray-700">affectation</label>
          <input type="text" name="affectation" id="affectation" value={formData.affectation} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="fonction" className="block text-sm font-medium text-gray-700">fonction</label>
          <input type="text" name="fonction" id="fonction" value={formData.fonction} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="poste" className="block text-sm font-medium text-gray-700">poste</label>
          <input type="text" name="poste" id="poste" value={formData.poste} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="type_sortie" className="block text-sm font-medium text-gray-700">type_sortie</label>
          <input type="text" name="type_sortie" id="type_sortie" value={formData.type_sortie} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="date_sortie" className="block text-sm font-medium text-gray-700">date_sortie</label>
          <input type="date" name="date_sortie" id="date_sortie" value={formData.date_sortie} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"  />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="administration_accueil" className="block text-sm font-medium text-gray-700">administration_accueil</label>
          <input type="text" name="administration_accueil" id="administration_accueil" value={formData.administration_accueil} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
          <label htmlFor="statut_activite" className="block text-sm font-medium text-gray-700">statut_activite</label>
          <input type="text" name="statut_activite" id="statut_activite" value={formData.statut_activite} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
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





