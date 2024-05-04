import { Outlet, Navigate } from 'react-router-dom';
import useAuthContext from '../contexts/AuthContext';
import Navbar from '../pages/Navbar/Navbar';
import SideBar from '../pages/SideBar/SideBar';
import { Provider } from 'react-redux';
import Store from '../app/Store';

const DefaultLayout = () => {
 const { user } = useAuthContext();

 if (!user) {
   return <Navigate to="/login" />;
 }

 return (
    <Provider store={Store}>
      <div className="grid grid-cols-[256px_minmax(900px,_1fr)]">
        <SideBar />
        <div className="grid grid-rows-[72px_calc(100vh-72px)] ">
          <Navbar />
          <main className="p-4 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </Provider>
 );
};

export default  DefaultLayout;
