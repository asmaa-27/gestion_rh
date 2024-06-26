import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed bg-gray-200 dark:bg-primary-950 text-black h-screen dark:text-white px-4 py-6 flex flex-col justify-between top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:translate-x-0 md:static z-10`}>
      <div>
          <div className="flex flex-col items-center justify-between mb-8">
          <button
            onClick={toggleSidebar}
            className="md:hidden px-2 py-2 rounded-md dark:hover:bg-gray-300 hover:bg-gray-400 mb-4"
          >
            <FaTimes />
          </button>
          <img src={logo} alt="Logo" className="h-20 w-auto mb-4   " />
        </div>

        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="flex items-center space-x-4   hover:bg-gray-400 dark:hover:bg-primary-500 rounded-md p-2 ">
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span  >Tableau de bord</span>
              </Link>
            </li>
            <li>
              <Link to="/AffichageFonctionnaires" className="flex items-center space-x-4 dark:hover:bg-primary-500 hover:bg-gray-400 rounded-md p-2 ">
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span  >Dossiers personnels</span>
              </Link>
            </li>
            <li>
              <Link to="/demande-absence" className="flex items-center space-x-4 dark:hover:bg-primary-500 hover:bg-gray-400 rounded-md p-2 ">
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span >Autorisation Absences</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center">
        <p className="text-sm">© 2024 RH App</p>
      </div>
    </aside>
  );
};

export default Sidebar;
