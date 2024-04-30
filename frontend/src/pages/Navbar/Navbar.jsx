import { useState } from 'react';
import { FaMoon, FaSun, FaSearch, FaCog, FaSignOutAlt } from 'react-icons/fa';
import useAuthContext from '../../contexts/AuthContext';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { logout } = useAuthContext();



  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
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
            className="bg-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-md hover:bg-gray-700"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="px-4 py-2 rounded-md hover:bg-gray-700">
          <FaCog />
        </button>

            <button onClick={logout} className="block w-full px-4 py-2 rounded-md hover:bg-gray-700">
              <FaSignOutAlt />
            </button>


      </div>
    </header>
  );
};

export default Navbar;
