import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayFonctionnaire ,deleteFonctionnaire} from '../../features/FontionnairesSlice';
import { RiSearchLine } from 'react-icons/ri';
import { FcViewDetails } from "react-icons/fc";
import { FaPlus ,FaTrash } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const AffichageFonctionnaires = () => {
 const dispatch = useDispatch();
 const {loading, error,fonctionnaires } = useSelector((state) => state.fonctionnaire);

 useEffect(() => {
  console.log('bonjour')
    dispatch(displayFonctionnaire());
 }, []);

 const [filterDate, setFilterDate] = useState('');
 const [searchQuery, setSearchQuery] = useState('');
 const [currentPage, setCurrentPage] = useState(0);
 const itemsPerPage = 10;
 const pageCount = Math.ceil(fonctionnaires.length / itemsPerPage);

 const handleDelete = (cin) => {
    dispatch(deleteFonctionnaire(cin));
 };

 if (loading) return <div>Loading...</div>;
 if (error) return <div>Error: {error}</div>;

 const filteredfonctionnaires = fonctionnaires
    .filter((fonctionnaires) => {
      const isDateMatch = filterDate === '' || (fonctionnaires.created_at && fonctionnaires.created_at.includes(filterDate));
      const isSearchMatch =
        searchQuery === '' ||
        (fonctionnaires && fonctionnaires.nom && fonctionnaires.nom.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (fonctionnaires && fonctionnaires.cin.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (fonctionnaires && fonctionnaires.prenom && fonctionnaires.prenom.toLowerCase().includes(searchQuery.toLowerCase()));
      return isDateMatch && isSearchMatch;
    })
    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

 return (
<main className="p-4 ">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-16   mb-8">
        <div className="mb-4 sm:mb-0">
          <label htmlFor="filterDate" className="mb-1 pr-4">Filter par Date : </label>
          <input
            id="filterDate"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="searchQuery" className="mb-1 pr-4">Recherche : </label>
          <div className="relative">
            <input
              id="searchQuery"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="recherche par nom"
              className="border rounded-md px-2 py-1 pl-8 pr-3"
            />
            <RiSearchLine className="absolute h-5 w-5 text-gray-500 top-1/2 transform -translate-y-1/2 left-3" />
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center">
          <FaPlus className="mr-2" />
          <Link to="/Stepper">Ajouter</Link>
        </button>
      </div>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="border px-4 py-2">
            <th>ID</th>
            <th>Fonctionnaires</th>
            <th>CIN</th>
            <th>adresse</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredfonctionnaires.map((fonctionnaires) => (
            <tr key={fonctionnaires.id}>
              <td className="border px-4 py-2">{fonctionnaires.id}</td>
              <td className="border px-4 py-2">{fonctionnaires.nom} {fonctionnaires.prenom}</td>
              <td className="border px-4 py-2">{fonctionnaires.cin}</td>
              <td className="border px-4 py-2">{fonctionnaires.adresse}</td>
              <td className="border px-4 py-2">{fonctionnaires.image}</td>
              <td className="border px-4 py-2">
                <div className="flex space-x-6">
                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-1" onClick={() => handleDelete(fonctionnaires.cin)}>
                    <FaTrash />
                 </button>
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/api/fonctionnaires/${fonctionnaires.cin}`}>
                      <FcViewDetails />
                    </Link>
                 </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
 previousLabel={
    <IconContext.Provider value={{ size: "1.5em", className: "text-blue-500" }}>
      <AiFillLeftCircle />
    </IconContext.Provider>
 }
 nextLabel={
    <IconContext.Provider value={{ size: "1.5em", className: "text-blue-500" }}>
      <AiFillRightCircle />
    </IconContext.Provider>
 }
 breakLabel={"..."}
 breakClassName={"hidden"}
 pageCount={pageCount}
 marginPagesDisplayed={2}
 pageRangeDisplayed={5}
 onPageChange={({ selected }) => setCurrentPage(selected)}
 containerClassName={"flex justify-center items-center mt-auto"}
 subContainerClassName={"flex space-x-2"}
 activeClassName={"bg-blue-500 text-white"}
 pageClassName={"border border-blue-500 px-3 py-1 rounded"}
 disabledClassName={"opacity-50 cursor-not-allowed"}
/>


    </main>
 );
};

export default AffichageFonctionnaires;
