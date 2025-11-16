import { useEffect, useState } from "react"
import { getProfileById, updateProfile } from "../services/client/clientService"
import { CircleUserRound, Edit, Save, X, Loader } from "lucide-react"

export const ContentProfile = () => {
  const userData = JSON.parse(localStorage.getItem('user_data'))

  const [showData, setShowData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    doc_number: '',
    address: ''
  })

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('login_token')
      try {
        const profile = await getProfileById(userData.id, token)
        console.log('Profile data:', profile)
        setShowData(profile.data)
        setFormData({
          email: profile.data.email,
          first_name: profile.data.partner.first_name,
          last_name: profile.data.partner.last_name,
          phone: profile.data.partner.phone,
          doc_number: profile.data.partner.doc_number,
          address: profile.data.partner.address
        })
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [userData.id])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setFormData({
      email: showData.email,
      first_name: showData.partner.first_name,
      last_name: showData.partner.last_name,
      phone: showData.partner.phone,
      doc_number: showData.partner.doc_number,
      address: showData.partner.address
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('login_token')

      const dataToSend = {
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: formData.phone,
        doc_number: formData.doc_number,
        address: formData.address
      }

      console.log('Datos a guardar:', dataToSend)

      const updatedProfile = await updateProfile(userData.id, dataToSend, token)
      console.log('Profile updated:', updatedProfile)

      setShowData({
        ...showData,
        email: formData.email,
        partner: {
          ...showData.partner,
          first_name: formData.first_name,
          last_name: formData.last_name,
          phone: formData.phone,
          doc_number: formData.doc_number,
          address: formData.address
        }
      })

      setIsEditing(false)
      alert('Perfil actualizado correctamente')
    } catch (error) {
      console.error('Error saving profile:', error)
      alert('Error al actualizar el perfil: ' + error.message)
    }
  }

  if (loading) {
    return (
      <section className="flex justify-center items-center h-full bg-gray-50">
        <Loader className="animate-spin text-gray-400" size={40} />
      </section>
    )
  }

  if (!showData) {
    return (
      <section className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto text-center py-12">
          <p className="text-gray-500">No se pudo cargar el perfil</p>
        </div>
      </section>
    )
  }

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <Edit size={18} />
              Editar
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                <Save size={18} />
                Guardar
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X size={18} />
                Cancelar
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-24"></div>

          <div className="px-8 pb-8">
            <div className="flex items-end gap-4 -mt-12 mb-8">
              <div className="bg-white p-2 rounded-lg border-4 border-white">
                <CircleUserRound size={80} className="text-gray-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {formData.first_name} {formData.last_name}
                </h2>
                <p className="text-gray-500 text-sm">{showData?.role?.code}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium mt-1">{formData.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Teléfono</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium mt-1">{formData.phone}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Documento</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="doc_number"
                      value={formData.doc_number}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium mt-1">{formData.doc_number}</p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nombres</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium mt-1">{formData.first_name}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Apellidos</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium mt-1">{formData.last_name}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Rol</label>
                  <p className="text-gray-900 font-medium mt-1">{showData?.role?.code}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Dirección</label>
              {isEditing ? (
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  rows="3"
                />
              ) : (
                <p className="text-gray-900 font-medium mt-1">{formData.address}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentProfile