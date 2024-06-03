import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddemandeAbsence } from '../../features/DemandAbsenceSlice';
import { useDispatch } from 'react-redux';


const AjouterDemande = () => {
  const dispatch = useDispatch();

    const navigate = useNavigate();
 const [formData, setFormData] = useState({
    cin:'',
    date_depart: '',
    nombre_de_jours: '',
    nombre_a_deduire: '',
    nombre_a_ne_pas_deduire: '',
    type_d_absence: '',
    remplaçant: '',
    file:null,
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
    cin:'',
    date_depart: '',
    nombre_de_jours: '',
    nombre_a_deduire: '',
    nombre_a_ne_pas_deduire: '',
    type_d_absence: '',
    remplaçant: '',
    file:null,
})
  dispatch(AddemandeAbsence(formData));


  console.log(formData);

    navigate('/Demande-absence')
 };

 return (
  <div className="flex items-center justify-center min-h-screen">
    <form onSubmit={handleSubmit} className="space-y-4 mb-5 block w-1/2 p-2 border border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Demande Absence</h1>


      <div className="mb-4   ">
        <label className="block text-sm font-medium dark:text-white  text-black" htmlFor="cin">
           CIN
       </label>
        <input type="text" name="cin" value={formData.cin} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-950  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  />
      </div>
      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="date_depart">
          Date de départ
        </label>
        <input type="date" name="date_depart" value={formData.date_depart} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="nombre_de_jours">
          Nombre de jours
        </label>
        <input type="number" name="nombre_de_jours" value={formData.nombre_de_jours} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="nombre_a_deduire">
          Nombre à déduire
        </label>
        <input type="number" name="nombre_a_deduire" value={formData.nombre_a_deduire} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="nombre_a_ne_pas_deduire">
          Nombre à ne pas déduire
        </label>
        <input type="number" name="nombre_a_ne_pas_deduire" value={formData.nombre_a_ne_pas_deduire} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  />
      </div>

      <div className="mb-4 dark:bg-primary-950">
      <label className="block text-sm font-medium text-black dark:text-white" htmlFor="type_d_absence">Type Absence</label>
          <select name="type_d_absence" value={formData.type_d_absence} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" >
            <option value="" selected>Sélectionner une option</option>
            <option value="maladie">Maladie</option>
            <option value="congé">Congé annuel</option>
            <option value="formation">Formation</option>
            <option value="mission">Mission</option>
            <option value="hajj">Hajj</option>
            <option value="congé personnel">Congé personnel</option>
          </select>

</div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="remplaçant">
          Remplaçant
        </label>
        <input type="text" name="remplaçant" value={formData.remplaçant} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"   />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="file" id='file'>
        Fichiers
        </label>
        <input type="file" name="file" id='file'  onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"   />
      </div>

      <button className="bg-cyan-400 text-white px-6 py-3 rounded ml-4  items-center  flex justify-end">
  <span className='pr-4'>Soumettre</span>
</button>

    </form>
    </div>
 );
};

export default AjouterDemande;
