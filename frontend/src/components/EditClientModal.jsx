import { useState, useEffect } from "react"
import { X, Loader } from 'lucide-react'
import { updateClient } from "../services/admin/adminService"

export const EditClientModal = ({ isOpen, onClose, onSuccess, client }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    is_active: true
  })

  const [loading, setLoading] = useState(false)
  const [fetchingData, setFetchingData] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen && client) {
      fetchClientData()
    }
  }, [client, isOpen])

  const fetchClientData = async () => {
    setFetchingData(true)
    try {
      const token = localStorage.getItem('login_token')
      const response = await fetch(`http://127.0.0.1:4000/api/admin/clients/${client.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()
      console.log('Client data:', data)

      const clientData = data.data[0]
      setFormData({
        name: clientData.name || '',
        email: clientData.email || '',
        is_active: clientData.is_active || false
      })
      setError('')
    } catch (error) {
      console.error('Error fetching client data:', error)
      setError('Error al cargar los datos del cliente')
    } finally {
      setFetchingData(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    setError('')
  }

  const validateForm = () => {
    if (!formData.name || !formData.email) {
      setError('Completa todos los campos')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    try {
      const token = localStorage.getItem('login_token')

      const clientData = {
        name: formData.name,
        email: formData.email,
        is_active: formData.is_active
      }

      await updateClient(client.id, clientData, token)

      onSuccess()
      onClose()
    } catch (error) {
      setError(error.message || 'Error al actualizar el cliente')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Editar Cliente</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Loading State */}
        {fetchingData && (
          <div className="p-6 flex justify-center items-center">
            <Loader className="animate-spin text-gray-400" size={40} />
          </div>
        )}

        {/* Form */}
        {!fetchingData && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="p-3 bg-red-100 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_active"
                name="is_active"
                checked={formData.is_active}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="is_active" className="text-sm font-semibold text-gray-700 cursor-pointer">
                Cliente activo
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition font-semibold"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Guardando...' : 'Guardar cambios'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default EditClientModal