import { useState } from "react"
import loginLogo from '../../public/img/login_lawyer_1.jpg'
import { useNavigate } from 'react-router-dom'
import { loginService } from "../services/auth/loginService"
import {jwtDecode} from "jwt-decode"

export const Login = () => {

  const navigate = useNavigate()

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const loginFetch = async (e) => {
    e.preventDefault()
    try {
      const { token } =  await loginService(username, password)

      // Decode token to get user info (if needed)
      const decodedToken = jwtDecode(token)
      console.log('User data:', decodedToken)

      localStorage.setItem('login_token', token)
      navigate('/system')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }
 
  return (
    <div className="flex flex-col items-center justify-center h-screen text-black bg-gray-200">
      <div className="flex w-[65%] h-[70%] shadow-lg rounded-lg overflow-hidden">
        <div className="flex w-[45%]">
          <img src={loginLogo} alt="Login Logo" className=" h-auto rounded-lg shadow-lg" />
        </div>
        <div className="flex w-full items-center justify-items-center bg-white">
          <form onSubmit={loginFetch} className="flex flex-col w-[35%] mx-auto">
            <div className="mb-8 p-0">
              <h2 className="text-3xl font-bold mb-1 text-center">Bienvenido a Lawyer</h2>
              <p className="text-gray-600 text-center">Conectando personas con justicia.</p>
            </div>
            <div className="flex flex-col mb-8 p-0">
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
              <input  
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
              <div>
                <button type="button" className="hover:text-purple-700 text-purple-400 font-semibold cursor-pointer">Contraseña olvidada?</button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white font-semibold p-2 rounded-2xl hover:bg-purple-600 transition cursor-pointer"
            >
              Iniciar sesión
            </button>
            <div className="flex justify-center mt-4">
              <span className="text-gray-600">¿No tienes una cuenta?</span>
              <button 
                type="button"
                className="ml-2 text-purple-500 font-semibold hover:text-purple-700 cursor-pointer"
                onClick={() => navigate('/register')}
              >
                Regístrate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login