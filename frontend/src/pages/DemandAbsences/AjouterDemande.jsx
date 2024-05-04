import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adddemandeAbsence } from '../../features/AjouterDemandeSlice';
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
    date_de_retour: '',
    remplaçant: '',
    reliquat: '',
    cumul_des_absences_de_maladie: '',
 });
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(adddemandeAbsence(formData));

  console.log(formData);
    // Calculate the return date
    const date_depart = new Date(formData.date_depart);
    const daysOff = parseInt(formData.nombre_de_jours);
    const date_de_retour = new Date(date_depart.getTime() + (daysOff * 24 * 60 * 60 * 1000));

    // Calculate the remaining days
    const reliquat = 22 - (parseInt(formData.nombre_a_deduire) + parseInt(formData.cumul_des_absences_de_maladie));

    // Update the form data with the calculated values
    setFormData({
      ...formData,
      date_de_retour: date_de_retour.toISOString().slice(0, 10),
      reliquat: reliquat.toString(),
    });

    // Handle form submission logic
    console.log('Form submitted:', formData);

    // Print leave decisions on January 2nd of each year
    if (date_de_retour.getMonth() === 0 && date_de_retour.getDate() === 2) {
      console.log('Printing leave decisions...');
    }
    navigate('/Demande-absence')
 };

 return (
  <div className="flex items-center justify-center min-h-screen">
    <form onSubmit={handleSubmit} className="space-y-4 mb-5 block w-1/2 p-2 border border-gray-300 rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Demande Absence</h1>

     
      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="cin">
           CIN  
       </label>
        <input type="text" name="cin" value={formData.cin} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="date_depart">
          Date de départ
        </label>
        <input type="date" name="date_depart" value={formData.date_depart} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="nombre_de_jours">
          Nombre de jours
        </label>
        <input type="number" name="nombre_de_jours" value={formData.nombre_de_jours} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="nombre_a_deduire">
          Nombre à déduire
        </label>
        <input type="number" name="nombre_a_deduire" value={formData.nombre_a_deduire} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="nombre_a_ne_pas_deduire">
          Nombre à ne pas déduire
        </label>
        <input type="number" name="nombre_a_ne_pas_deduire" value={formData.nombre_a_ne_pas_deduire} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="type_d_absence">
          Type Absence
        </label>
        <input type="text" name="type_d_absence" value={formData.type_d_absence} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="date_de_retour">
          Date de retour
        </label>
        <input type="date" name="date_de_retour" value={formData.date_de_retour} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="remplaçant">
          Remplaçant
        </label>
        <input type="text" name="remplaçant" value={formData.remplaçant} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="reliquat">
          Reliquat 
        </label>
        <input type="number" name="reliquat" value={formData.reliquat} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4  dark:bg-primary-950">
        <label className="block text-sm font-medium dark:text-white text-black" htmlFor="cumul_des_absences_de_maladie">
          Cumul des absences de maladie
        </label>
        <input type="number" name="cumul_des_absences_de_maladie" value={formData.cumul_des_absences_de_maladie} onChange={handleInputChange} className="shadow appearance-none  dark:bg-primary-800 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <button className="bg-cyan-400 text-white px-6 py-3 rounded ml-4  items-center  flex justify-end">
  <span className='pr-4'>Submit</span>
</button>

    </form>
    </div>
 );
};

export default AjouterDemande;
