import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayFonctionnaire, deleteFonctionnaire } from '../../features/FontionnairesSlice';
import { RiSearchLine } from 'react-icons/ri';
import { FcViewDetails } from "react-icons/fc";
import { FaPlus, FaTrash, FaExclamationCircle } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Typewriter from 'typewriter-effect';

const AffichageFonctionnaires = () => {
  const dispatch = useDispatch();
  const { loading, error, fonctionnaires } = useSelector((state) => state.fonctionnaire);

  useEffect(() => {
    dispatch(displayFonctionnaire());
  }, [dispatch]);

  const [filterDate, setFilterDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(fonctionnaires.length / itemsPerPage);

  const handleDelete = (cin) => {
    dispatch(deleteFonctionnaire(cin));
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

  const filteredfonctionnaires = fonctionnaires
    .filter((fonctionnaire) => {
      const isDateMatch = filterDate === '' || (fonctionnaire.created_at && fonctionnaire.created_at.includes(filterDate));
      const isSearchMatch =
        searchQuery === '' ||
        (fonctionnaire.nom && fonctionnaire.nom.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (fonctionnaire.cin.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (fonctionnaire.prenom && fonctionnaire.prenom.toLowerCase().includes(searchQuery.toLowerCase()));
      return isDateMatch && isSearchMatch;
    })
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <main className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <header className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-black dark:text-white mb-9">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Les dossiers des fonctionnaires ')
                .pauseFor(1000)
                .start();
            }}
          />
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
           <div className="flex items-center space-x-2">
            <label htmlFor="filterDate" className="text-md  font-bold text-gray-700 dark:text-gray-300">Filter par Date  : </label>
            <input
              id="filterDate"
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="border rounded-md px-3 py-2 dark:bg-primary-950  "
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
                className="border rounded-md px-3 py-2 pl-10 pr-4   dark:bg-primary-950"
              />
              <RiSearchLine className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 left-3" />
            </div>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700   text-white font-bold py-2 px-4 rounded-md flex items-center">
              <FaPlus className="mr-2" />
              <Link to="/Stepper">Ajouter</Link>
            </button>
          </div>
        </div>
      </header>
      <main className="overflow-x-auto">
        <table className="min-w-full border-collapse border dark:bg-primary-950">
          <thead>
            <tr className="border px-3 py-2   ">
              <th className="border px-3 py-2  ">ID</th>
              <th className="border px-3 py-2  ">Fonctionnaires</th>
              <th className="border px-3 py-2  ">CIN</th>
              <th className="border px-3 py-2  ">Adresse</th>
              <th className="border px-3 py-2  ">Image</th>
              <th className="border px-3 py-2  ">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredfonctionnaires.map((fonctionnaire) => (
              <tr key={fonctionnaire.id} className="border-b last:border-b-0">
                <td className="border px-4 py-2  ">{fonctionnaire.id}</td>
                <td className="border px-4 py-2  ">{fonctionnaire.nom} {fonctionnaire.prenom}</td>
                <td className="border px-4 py-2  ">{fonctionnaire.cin}</td>
                <td className="border px-4 py-2  ">{fonctionnaire.ville} - {fonctionnaire.rue}</td>
                <td className="border px-4 py-2  ">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                    <img
                      src={fonctionnaire.image}
                      alt="Fonctionnaire"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="border px-4 py-2  ">
                  <div className="flex justify-center space-x-4">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white   font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(fonctionnaire.cin)}
                    >
                      <FaTrash />
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white    font-bold py-2 px-4 rounded">
                      <Link to={`/fonctionnaire/${fonctionnaire.cin}`}>
                        <FcViewDetails />
                      </Link>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
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
  containerClassName={"flex justify-center items-center   mt-6"}
  subContainerClassName={"flex space-x-2"}
  activeClassName={"bg-blue-500 text-white"}
  pageClassName={"border border-blue-500 px-3 py-1 rounded lg:px-4 lg:py-2  "} // Enhanced size on large screens
  disabledClassName={"opacity-50 cursor-not-allowed"}
/>
    </main>
  );
};

export default AffichageFonctionnaires;
