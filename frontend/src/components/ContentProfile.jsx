import { useEffect, useState } from "react"
import { getProfileById } from "../services/client/clientService"

export const ContentProfile = () => {
  const userData = JSON.parse(localStorage.getItem('user_data'))

  const [showData, setShowData] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('login_token')
      try {
        const profile = await getProfileById(userData.id, token)
        console.log('Profile data:', profile)
        setShowData(profile)
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    fetchProfile()
  }, [])

  return (
    <section className="flex flex-col bg-gray-100 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <strong>Nombres:</strong> {showData?.data.partner.first_name}
          </div>
          <div>
            <strong>Apellidos:</strong> {showData?.data.partner.last_name}
          </div>
          <div>
            <strong>Email:</strong> {showData?.data.email}
          </div>
          <div>
            <strong>Telefono:</strong> {showData?.data.partner.phone}
          </div>
          <div>
            <strong>DNI:</strong> {showData?.data.partner.doc_number}
          </div>
          <div>
            <strong>Dirección:</strong> {showData?.data.partner.address}
          </div>
          <div>
            <strong>Rol:</strong> {showData?.data.role.code}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentProfile