import { Outlet, Navigate } from 'react-router-dom';
import useAuthContext from '../contexts/AuthContext';
import Navbar from '../pages/Navbar/Navbar';
import Sidebar from "../pages/SideBar/SideBar"
import { Provider } from 'react-redux';
import Store from '../app/Store';

const DefaultLayout = () => {
 const { user } = useAuthContext();

 if (!user) {
   return <Navigate to="/login" />;
 }

 return (
    <Provider store={Store}>
        <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
    </Provider>
 );
};

export default DefaultLayout;
