import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

export  const router = createBrowserRouter ([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
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
