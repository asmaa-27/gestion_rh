import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import DetailsFonctionnaires from "./pages/DossierPersonnels/DetailsFonctionnaires";
import Stepper from "./pages/DossierPersonnels/stepper/Stepper";
import DemandAbsence from "./pages/DemandAbsences/DemandAbsence"
import AffichageFonctionnaires from "./pages/DossierPersonnels/AffichageFonctionnaire";
import AjouterDemande from "./pages/DemandAbsences/AjouterDemande";


export  const router = createBrowserRouter ([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },{
                path:'/AffichageFonctionnaires',
                element:<AffichageFonctionnaires/>
            },{
                path:'/Stepper',
                element:<Stepper/>
            },
            {
                path:'/fonctionnaire/:cin',
                element:<DetailsFonctionnaires/>
            },{
                path:'/demande-absence',
                element:<DemandAbsence/>
            },
            {
                path:'/AjouterDemande',
                element:<AjouterDemande/>
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
                path:'/password-reset/:token',
                element:<ResetPassword/>
            }
        ]
    },{
        path:'*',
        element:<PageNotFound/>
    },
])
