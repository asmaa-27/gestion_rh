import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import AffichageFonctionnaire from "./pages/DossierPersonnels/AffichageFonctionnaire";
import DemandAbsence from "./pages/DemandAbsences/DemandAbsence";


export  const router = createBrowserRouter ([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },{
                path:'/Information-personnels',
                element:<AffichageFonctionnaire/>
            },{
                path:'/Demande-absence',
                element:<DemandAbsence/>
            },
        ]
    },{
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },{
                path:'/register',
                element:<Register/>
            },{
                path:'/forgot-password',
                element:<ForgotPassword/>
            },{
                path:'/password-reset',
                element:<ResetPassword/>
            }
        ]
    },{
        path:'*',
        element:<PageNotFound/>
    },
])
