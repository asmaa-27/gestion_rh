
import Navbar from '../pages/Navbar/Navbar';
import Sidebar from '../pages/SideBar/SideBar';
import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuthContext from '../contexts/AuthContext';

import { Provider } from 'react-redux';
import Store from '../app/Store';

const DefaultLayout = () => {
  const { user } = useAuthContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Provider store={Store}>
      <div className="flex h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </Provider>
  );
};

export default DefaultLayout;
