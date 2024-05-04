import { useState } from 'react';
import { FaMoon, FaSun, FaSearch,   FaSignOutAlt } from 'react-icons/fa';
import useAuthContext from '../../contexts/AuthContext';

const Navbar = () => {
  const { logout } = useAuthContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }; 
  return (
<header className="bg-blue-400 dark:bg-primary-950 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold">
          RH App
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
        </div>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-md hover:bg-blue-300 "
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>


            <button onClick={logout} className="block w-full px-4 py-2 rounded-md hover:bg-blue-300">
              <FaSignOutAlt />
            </button>


      </div>
    </header>
  );
};

export default Navbar;
