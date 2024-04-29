import { Link } from "react-router-dom"
import { useState } from "react"
import useAuthContext from "../../contexts/AuthContext"
import axiosClient from "../../api/axios"
import wilaya from '../../assets/logo.png'

const ForgotPassword = () => {
    const[email,setEmail]=useState("")
    const [errors,setErrors]=useState([])
    const [status,setStatus]=useState(null)
    const {csrf } = useAuthContext()

    const handleSubmit = async(event) => {
        event.preventDefault()
        await csrf();
        setErrors([])
        setStatus(null)
        try{
            const response =await axiosClient.post('/forgot-password',{email})
            setStatus(response.data.status)

        }catch(e){
            if(e.response.status === 422){
                console.log(e.response.data.errors);
                setErrors(e.response.data.errors)
            }
        }
    }
  return (
    < >
<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Link to="/login" className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
  <img className="w-14 h-14 mr-2" src={wilaya} alt="Logo" />
</Link>
          <p className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
            Forgot your password ? <br/>Let us know your email address, and we will email you a password reset link.
          </p>
              {
                status && <div className=" m-2 p-2 rounded text-green-700"> {status}</div>
              }
              <form className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
              >
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                  </div>
                  {errors.email &&
                    <div className="p-4 bg-white text-red-500 rounded-lg mb-4">
                        <p>{errors.email[0]}</p>
                    </div>
                    }
                  <div>
                  <Link to="/login" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">  Back To Login  </Link>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Send Link</button>
              </form>
          </div>
      </div>
    </ >
  )
}

export default ForgotPassword
