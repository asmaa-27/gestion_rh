import { useState } from 'react';
import { FaMoon, FaSun,FaSignOutAlt} from 'react-icons/fa';

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
<header className="bg-gray-200 dark:bg-primary-950 text-black py-4 px-6 flex  dark:text-white  justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold">
          RH App
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-md  dark:hover:bg-gray-300 hover:bg-gray-400 "
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>


            <button onClick={logout} className="block w-full px-4 py-2 rounded-md dark:hover:bg-gray-300 hover:bg-gray-400">
            <FaSignOutAlt />
            </button>


      </div>
    </header>
  );
};

export default Navbar;
