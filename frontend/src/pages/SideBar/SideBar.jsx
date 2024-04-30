import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.png'
const Sidebar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleSidebar = () => {
    setIsOpen(!isOpen);
 };

 return (
    <aside>
      {/* Bouton pour les écrans de petite taille */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-700">
          {/* Icône pour le menu, par exemple */}
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen w-64 px-4 py-6 flex flex-col justify-between fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:translate-x-0 z-10`}>
        <div>
        <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>

          <nav>
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard" className="flex items-center space-x-4 hover:bg-gray-700 rounded-md p-2">
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                 </svg>
                 <span>Tableau de bord</span>
                </Link>
              </li>
              <li>
                <Link to="/AffichageFonctionnaires" className="flex items-center space-x-4 hover:bg-gray-700 rounded-md p-2">
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                 </svg>
                 <span>Dossiers personnels</span>
                </Link>
              </li>
              <li>
                <Link to="/Demande-absence" className="flex items-center space-x-4 hover:bg-gray-700 rounded-md p-2">
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <span>Gestion des absences</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center">
          <p className="text-sm">© 2024 My App</p>
        </div>
      </div>


    </aside>
 );
};

export default Sidebar;
