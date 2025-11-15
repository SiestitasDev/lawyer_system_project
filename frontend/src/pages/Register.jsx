import { useState } from "react"
import loginLogo from '../../public/img/login_lawyer_1.jpg'
import { useNavigate } from 'react-router-dom'
import { registerService } from '../services/auth/registerService'

export const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    docType: 1,
    docNumber: '',
    phone: '',
    address: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name || !formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Completa todos los campos obligatorios')
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return false
    }
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return false
    }
    setError('')
    return true
  }

  const registerFetch = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    try {
      const userData = {
        name: formData.name,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        role_id: 3, // Siempre cliente en registro público
        doc_type_id: parseInt(formData.docType),
        doc_number: parseInt(formData.docNumber),
        phone: parseInt(formData.phone),
        address: formData.address
      }

      await registerService(userData)
      alert('Registro exitoso. Ahora puedes iniciar sesión.')
      navigate('/login')
    } catch (error) {
      console.error('Registration failed:', error)
      setError('Error al registrar. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-200 py-8">
      <div className="flex w-[75%] shadow-lg rounded-lg overflow-hidden">
        <div className="flex w-[35%]">
          <img src={loginLogo} alt="Register Logo" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div className="flex w-full items-center justify-center bg-white">
          <form onSubmit={registerFetch} className="flex flex-col w-[80%] mx-auto py-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-1 text-center">Regístrate en Lawyer</h2>
              <p className="text-gray-600 text-center">Conectando personas con justicia.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre de usuario *"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="Nombres *"
                value={formData.firstName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Apellidos *"
                value={formData.lastName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="password"
                name="password"
                placeholder="Contraseña *"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar contraseña *"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <select
                name="docType"
                value={formData.docType}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              >
                <option value="1">DNI</option>
                <option value="2">Carnet de Extranjería</option>
                <option value="3">Pasaporte</option>
              </select>
              <input
                type="text"
                name="docNumber"
                placeholder="Número de documento *"
                value={formData.docNumber}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono *"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Dirección *"
                value={formData.address}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-600 rounded-lg text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-500 text-white font-semibold p-2 rounded-2xl hover:bg-purple-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registrando...' : 'Registrarse'}
            </button>

            <div className="flex justify-center mt-4">
              <span className="text-gray-600">¿Ya tienes una cuenta?</span>
              <button 
                type="button"
                className="ml-2 text-purple-500 font-semibold hover:text-purple-700 cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Inicia sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register