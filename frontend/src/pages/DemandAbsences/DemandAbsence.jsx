import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const DemandAbsence = () => {
   const [absences, setAbsences] = useState([]);
  
   
  
   const deleteAbsence = (index) => {
      const newAbsences = absences.filter((_, i) => i !== index);
      setAbsences(newAbsences);
   };
  
   return (
      <div className="flex flex-col">
       <div className="flex flex-col sm:flex-row justify-between items-center mt-16   mb-8">
        <div className="mb-4 sm:mb-0">
          <label htmlFor="filterDate" className="mb-1 pr-4">Filter par Date : </label>
          <input
            id="filterDate"
            type="date"
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="searchQuery" className="mb-1 pr-4">Recherche : </label>
          <div className="relative">
            <input
              id="searchQuery"
              type="text"
              placeholder="recherche par nom"
              className="border rounded-md px-2 py-1 pl-8 pr-3"
            />
            <RiSearchLine className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 left-3" />
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center">
          <FaPlus className="mr-2" />
          <Link to="/AjouterDemande">Ajouter</Link>
        </button>
      </div>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="px-4 py-2">CIN</th>
              <th className="px-4 py-2">Nom</th>
              <th className="px-4 py-2">Raison absence</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {absences.map((absence, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{absence.cin}</td>
                <td className="border px-4 py-2">{absence.nom}</td>
                <td className="border px-4 py-2">{absence.raisonAbsence}</td>
                <td className="border px-4 py-2">
                  <button
                   onClick={() => deleteAbsence(index)}
                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                   Supprimer
                  </button>
                  <button
                   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                   Télécharger
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   );
  };
  
  

export default DemandAbsence;