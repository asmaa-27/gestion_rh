import  {useState}from "react";
import { FaExclamationCircle, FaRegCheckCircle } from "react-icons/fa";

const DilpomeForm = () =>{
    const [formData, setFormData] = useState({
        IntituleDiplome: '',
        SpecialiteDiplome: '',
        DateObtention: '',
        Etablissement: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

    return(
        <>
        <div className="flex items-center justify-center p-4 mt-4 text-2xl font-bold ">
          <h1>Les diplômes :</h1>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <form onSubmit={handleSubmit} className="space-y-4 mb-40 block w-1/2 p-2 border border-gray-300 rounded-md">

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="IntituleDiplome" className="block text-sm font-medium text-gray-700">Intitule Diplome :</label>
            <input type="text" name="IntituleDiplome" id="IntituleDiplome" value={formData.IntituleDiplome} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="SpecialiteDiplome" className="block text-sm font-medium text-gray-700">Specialité Diplome :</label>
            <input type="text" name="SpecialiteDiplome" id="SpecialiteDiplome" value={formData.SpecialiteDiplome} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="DateObtention" className="block text-sm font-medium text-gray-700">Date obtention :</label>
            <input type="text" name="DateObtention" id="DateObtention" value={formData.DateObtention} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="bg-white shadow-md rounded-lg  m-6 p-6 focus:border-blue-500 ">
            <label htmlFor="Etablissement" className="block text-sm font-medium text-gray-700">Établissement :</label>
            <input type="text" name="Etablissement" id="Etablissement" value={formData.Etablissement} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
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
export default DilpomeForm
