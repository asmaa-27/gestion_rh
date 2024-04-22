import {useState ,useEffect} from 'react'
import useAuthContext from '../../contexts/AuthContext'
import axiosClient from '../../api/axios'
import { useParams,useSearchParams,Link } from 'react-router-dom'


const ResetPassword = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [password_confirmation,setPasswordConfirmation]=useState("");
    const [status,setStatus] = useState(null)
    const [errors,setErrors]=useState([])
    const {csrf}=useAuthContext()
    const [searchParams]=useSearchParams()
    const {token} = useParams()

    useEffect(()=>{
        setEmail(searchParams.get("email"))
        console.log(email)
    },[email])

    const handleSubmit = async(event) =>{
        event.preventDefault()
        await csrf()
        setErrors([])
        setStatus(null)
        try{
            const response =await axiosClient.post('/reset-password',{email,token,password,password_confirmation})
            setStatus(response.data.status)

        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

  return (
    <>
    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add your new password
          </h2>
          {
                status &&
                <div className="bg-green-700 m-2 p-2 rounded text-white"> {status}
                    <div className='m-2 p-2'>Go To
                    <Link to="/login">Login</Link>
                    </div>
                </div>
              }
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>

              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              {errors.password &&
                    <div className="p-4 bg-white text-red-500 rounded-lg mb-4">
                        <p>{errors.password[0]}</p>
                    </div>
                    }
              <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password_confirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
              </div>
              {errors.password_confirmation &&
                    <div className="p-4 bg-white text-red-500 rounded-lg mb-4">
                        <p>{errors.password_confirmation[0]}</p>
                    </div>
                    }
              <button type="submit" className=" w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
          </form>
      </div>
    </>
  )
}

export default ResetPassword
