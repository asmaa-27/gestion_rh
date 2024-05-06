import {Link, useNavigate  } from "react-router-dom"
 import { useState } from "react"
 import useAuthContext from "../../contexts/AuthContext"
import wilaya from '../../assets/logo.png'

const Register = () => {
    const navigate=useNavigate
    const {register,errors}=useAuthContext()
     const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [password_confirmation,setPasswordConfirmation]=useState("")

    const handleSubmit=async(event)=>{
    event.preventDefault()
    register({name,email,password,password_confirmation})
    navigate("/")
    }
  return (
        <>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Link to="/login" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-14 h-14 mr-2" src={wilaya} alt="Logo" />
                    </Link>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Créer un compte
                    </h1>

                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur</label>
                            <input type="text" name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrez votre nom" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        {errors.name &&
                            <div className="p-2 bg-white text-red-500 rounded-lg mb-4">
                                <p>{errors.name}</p>
                            </div>
                        }
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@domaine.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        {errors.email &&
                            <div className="p-2 bg-white text-red-500 rounded-lg mb-4">
                                <p>{errors.email}</p>
                            </div>
                        }
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {errors.password &&
                            <div className="p-2 bg-white text-red-500 rounded-lg mb-4">
                                <p>{errors.password}</p>
                            </div>
                        }
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer le mot de passe</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                        </div>
                        {errors.password_confirmation &&
                            <div className="p-2 bg-white text-red-500 rounded-lg mb-4">
                                <p>{errors.password_confirmation[0]}</p>
                            </div>
                        }
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Créer un compte</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Vous avez déjà un compte? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Connectez-vous ici</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
  )
}

export default Register
