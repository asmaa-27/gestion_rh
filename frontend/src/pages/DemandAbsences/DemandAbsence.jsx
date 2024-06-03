import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayDemande, DeleteDemande, downloadPdf } from '../../features/DemandAbsenceSlice';
import { RiSearchLine } from 'react-icons/ri';
import { FaPlus, FaTrash, FaExclamationCircle } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { HiOutlineDownload } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import Typewriter from 'typewriter-effect';

const DemandAbsence = () => {
  const dispatch = useDispatch();
  const { loading, error, demandeAbsence } = useSelector((state) => state.demandeAbsence);

  useEffect(() => {
    console.log('bonjour');
    dispatch(DisplayDemande());
  }, [dispatch]);

  const handleDownloadPdf = (cin) => {
    dispatch(downloadPdf(cin));
  };

  const [filterDate, setFilterDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(demandeAbsence.length / itemsPerPage);

  const handleDelete = (cin) => {
    dispatch(DeleteDemande(cin));
  };

  if (loading) return (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50  ">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin  "></div>
      </div>
      <p className="text-gray-900 font-bold text-lg  ">Loading...</p>
    </div>
  </div>
);
 if (error) return (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <div className="text-red-500 text-4xl   mb-4">
          <FaExclamationCircle />
        </div>
      </div>
      <p className="text-gray-900 font-bold text-lg  ">Error: {error}</p>
    </div>
  </div>
);

  const filteredDemandeAbsence = demandeAbsence
    .filter((demandeAbsence) => {
      const isDateMatch = filterDate === '' || (demandeAbsence.created_at && demandeAbsence.created_at.includes(filterDate));
      const isSearchMatch =
        searchQuery === '' ||
        (demandeAbsence && demandeAbsence.cin.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (demandeAbsence && demandeAbsence.fonctionnaire.nom.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (demandeAbsence && demandeAbsence.fonctionnaire.prenom.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (demandeAbsence && demandeAbsence.type_d_absence && demandeAbsence.type_d_absence.toLowerCase().includes(searchQuery.toLowerCase()));
      return isDateMatch && isSearchMatch;
    })
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);


  return (
    <main className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-9">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Les Autorisations Absences ')
                .pauseFor(1000)
                .start();
            }}
          />
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
           <div className="flex items-center space-x-2">
            <label htmlFor="filterDate" className="text-md  font-bold text-gray-700 dark:text-gray-300 ">Filter par Date  : </label>
            <input
              id="filterDate"
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="border rounded-md px-3 py-2 dark:bg-primary-950 "
            />
          </div>
          <div>
            <div className="relative">
              <input
                id="searchQuery"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="recherche par ..."
                className="border rounded-md px-3 py-2 pl-10 pr-4 dark:bg-primary-950 "
              />
              <RiSearchLine className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 left-3" />
            </div>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center ">
              <FaPlus className="mr-2" />
              <Link to="/AjouterDemande" >Ajouter</Link>
            </button>
          </div>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border dark:bg-primary-950">
          <thead>
            <tr>
              <th className="border px-2 py-2 ">CIN</th>
              <th className=" border px-2 py-2 ">Nom Fonctionnaire</th>
              <th className="border px-2 py-2 ">Date de depart</th>
              <th className="border px-2 py-2 ">Type de absence</th>
              <th className="border px-2 py-2 ">Date de retour</th>
              <th className="border px-2 py-2 ">Nombre de jours</th>
              <th className="border px-2 py-2 ">Reliquant</th>
              <th className="border px-2 py-2 ">Cumul des absences</th>
              <th className="border px-2 py-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDemandeAbsence.map((demandeAbsence) => (
              <tr key={demandeAbsence.id}>
                <td className="border px-2  ">{demandeAbsence.cin}</td>
                <td className="border px-2  ">{demandeAbsence.fonctionnaire.nom} - {demandeAbsence.fonctionnaire.prenom}</td>
                <td className="border px-2 py-2 ">{demandeAbsence.date_depart}</td>
                <td className=" border px-2 py-2 ">{demandeAbsence.type_d_absence}</td>
                <td className=" border px-2 py-2 ">{demandeAbsence.date_de_retour}</td>
                <td className=" border px-2 py-2 ">{demandeAbsence.reliquat}</td>
                <td className=" border px-2 py-2 ">{demandeAbsence.nombre_de_jours}</td>
                <td className=" border px-2 py-2 ">{demandeAbsence.cumul_des_absences_de_maladie}</td>
                <td className=" border px-2 py-2 ">
<div className="flex space-x-6">
<button className="bg-red-500 hover
text-white font-bold py-2 px-4 rounded mr-1" onClick={() => handleDelete(demandeAbsence.cin)}>
<FaTrash />
</button>
<button onClick={() => handleDownloadPdf(demandeAbsence.cin)} className="bg-blue-500 hover
text-white font-bold py-2 px-4 rounded">
<HiOutlineDownload />
</button>
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
<ReactPaginate
  previousLabel={
    <IconContext.Provider value={{ size: "1.5em", className: "text-blue-500  " }}>
      <AiFillLeftCircle />
    </IconContext.Provider>
  }
  nextLabel={
    <IconContext.Provider value={{ size: "1.5em", className: "text-blue-500  " }}>
      <AiFillRightCircle />
    </IconContext.Provider>
  }
  breakLabel={"..."}
  breakClassName={"hidden"}
  pageCount={pageCount}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={({ selected }) => setCurrentPage(selected)}
  containerClassName={"flex justify-center items-center  mt-6"}
  subContainerClassName={"flex space-x-2"}
  activeClassName={"bg-blue-500 text-white"}
  pageClassName={"border border-blue-500 px-3 py-1 rounded lg:px-4 lg:py-2 "}
  disabledClassName={"opacity-50 cursor-not-allowed"}
/>
</main>
);
};

export default DemandAbsence;
