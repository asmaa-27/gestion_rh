import { Outlet, Navigate   } from "react-router-dom";
import backg from "../assets/backg.jpg";
// import wilaya from '../assets/image.png'
import useAuthContext from "../contexts/AuthContext";

export default function GuestLayout() {
  const { user } = useAuthContext();

  return (
    <div id="guestLayout" className="flex justify-center items-center h-screen  ">
      <div className="w-1/2 ">
        <img src={backg} alt="Background Image" className="h-full w-full object-cover" />
      </div>
      <section className="w-1/2 bg-gray-50 dark:bg-gray-900 text">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {!user ? <Outlet /> : <Navigate to="/dashboard" />}
        </div>
      </section>
    </div>
  );
}
