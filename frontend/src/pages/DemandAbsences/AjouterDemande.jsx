import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AjouterDemande = () => {
    const navigate = useNavigate();
 const [formData, setFormData] = useState({
    startDate: '',
    numberOfDays: '',
    daysToDeduct: '',
    daysNotToDeduct: '',
    absenceType: '',
    returnDate: '',
    substitute: '',
    remainingDays: '',
    sickLeaveTotal: '',
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

    // Calculate the return date
    const startDate = new Date(formData.startDate);
    const daysOff = parseInt(formData.numberOfDays);
    const returnDate = new Date(startDate.getTime() + (daysOff * 24 * 60 * 60 * 1000));

    // Calculate the remaining days
    const remainingDays = 22 - (parseInt(formData.daysToDeduct) + parseInt(formData.sickLeaveTotal));

    // Update the form data with the calculated values
    setFormData({
      ...formData,
      returnDate: returnDate.toISOString().slice(0, 10),
      remainingDays: remainingDays.toString(),
    });

    // Handle form submission logic
    console.log('Form submitted:', formData);

    // Print leave decisions on January 2nd of each year
    if (returnDate.getMonth() === 0 && returnDate.getDate() === 2) {
      console.log('Printing leave decisions...');
    }
    navigate('/Demande-absence')
 };

 return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md m-12">
      <h1 className="text-2xl font-bold mb-4 text-center">Demande Absence</h1>

      {/* Input fields with labels */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
          Date de départ
        </label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfDays">
          Nombre de jours
        </label>
        <input type="number" name="numberOfDays" value={formData.numberOfDays} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="daysToDeduct">
          Nombre à déduire
        </label>
        <input type="number" name="daysToDeduct" value={formData.daysToDeduct} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="daysNotToDeduct">
          Nombre à ne pas déduire
        </label>
        <input type="number" name="daysNotToDeduct" value={formData.daysNotToDeduct} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="absenceType">
          Type Absence
        </label>
        <input type="text" name="absenceType" value={formData.absenceType} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnDate">
          Date de retour
        </label>
        <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="substitute">
          Remplaçant
        </label>
        <input type="text" name="substitute" value={formData.substitute} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remainingDays">
          Reliquat calculé automatiquement
        </label>
        <input type="number" name="remainingDays" value={formData.remainingDays} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sickLeaveTotal">
          Cumul des absences de maladie calculé automatiquement
        </label>
        <input type="number" name="sickLeaveTotal" value={formData.sickLeaveTotal} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>

      {/* Submit button */}
      <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Soumettre
      </button>
    </form>
 );
};

export default AjouterDemande;
