import { useContext,createContext,useState } from "react";
import axiosClient from "../api/axios";
import { useEffect } from "react";
const AuthContext=createContext( );


export const AuthProvider=({children})=>{
  const [user,setUser]=useState(null)
    const[errors,setErrors]=useState([])
    const csrf=()=>axiosClient.get('/sanctum/csrf-cookie')

    const getUser=async()=>{
        try{
            const {data}=await axiosClient.get('/api/user')
            setUser(data)
        setUser(data);
        }catch(error){
            console.error('Failed to fetch user',error)
        }
    }
    const login = async({...data})=>{
        await csrf()
        setErrors([])
        try{
            await axiosClient.post('/login',data);
            await getUser();

        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }
    const register = async({...data})=>{
        await csrf()
        setErrors([])
        try{
            await axiosClient.post('/register',data)
            await getUser()

        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }
     // Function to handle logout
 const logout = () => {
    axiosClient.post("/logout").then(() => {
      setUser(null);
    });
 };

 // Effect to fetch the user on component mount
 useEffect(() => {
    if (!user) {
      getUser();
    }
 }, []);

    return <AuthContext.Provider value={{user,errors,getUser,login,register,logout,csrf}}>
        {children}
    </AuthContext.Provider>

}
export default function useAuthContext(){
    return useContext(AuthContext)
}
