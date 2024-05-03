import { FaPlus} from "react-icons/fa";
import { Link } from "react-router-dom";

const DocumentForm = () => {
    return (
       <div className="flex justify-center mx-auto">
         <div className="grid grid-cols-3 gap-4 max-w-screen-md mb-6">

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dossier familial</h5>
                <Link to="" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <FaPlus className="text-2xl"/>
                </Link>
            </div>
             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dossier administratif</h5>
                <Link to="" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <FaPlus className="text-2xl"/>
                </Link>
            </div>
             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dossier notations</h5>
                <Link to="" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <FaPlus className="text-2xl"/>
                </Link>
            </div>
             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dossier affectations</h5>
                <Link to="" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <FaPlus className="text-2xl"/>
                </Link>
            </div>
             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dossier autorisations absence</h5>
                <Link to="" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <FaPlus className="text-2xl"/>
                </Link>
             </div>
             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dossier de la prévoyance sociale</h5>
                <Link to="" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <FaPlus className="text-2xl"/>
                </Link>
           </div>
             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dossier Divers</h5>
                <Link to="" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-blue-400 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <FaPlus className="text-2xl"/>
                </Link>
           </div>



         </div>

       </div>
    );
};

export default DocumentForm;
