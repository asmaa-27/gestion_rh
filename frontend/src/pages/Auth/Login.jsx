import { Link ,useNavigate} from "react-router-dom"
import { useState  } from "react"
import wilaya from '../../assets/logo.png'
import useAuthContext from "../../contexts/AuthContext"


 const Login = () => {
    const navigate=useNavigate()
     const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {login,errors   }=useAuthContext()

     const handleSubmit = async(event)=>{
        event.preventDefault()
        login({email,password})
        navigate("/")

 }
//  useEffect(() => {
//     if (user) {
//         navigate("/dashboard");
//     }
// }, [user, navigate]);



  return (
    <>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Link to="/login" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-20 h-20 mr-2" src={wilaya} alt="Logo" />
                    </Link>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Connectez-vous à votre compte
                    </h1>

                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Votre adresse e-mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="adresse@domaine.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && (
                            <div className="p-4 bg-white text-red-500 rounded-lg mb-4">
                                <p>{errors.email}</p>
                            </div>
                        )}

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && (
                            <div className="p-4 bg-white text-red-500 rounded-lg mb-4">
                                <p>{errors.password}</p>
                            </div>
                        )}
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                        Se souvenir de moi
                                    </label>
                                </div>
                            </div>
                            <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Se connecter
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Vous n'avez pas de compte ?{" "}
                            <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Inscrivez-vous
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
  )
}

export default Login
