import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import SystemHeader from "../components/SystemHeader"

export const System = () => {

  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar si hay token y obtener datos del usuario
    const token = localStorage.getItem('login_token')
    const userData = localStorage.getItem('user_data')

    if (token && userData) {
      const parsed = JSON.parse(userData)
      setUserData(parsed)
    }else {
      window.location.href = '/login'
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (!userData) {
    return <div>No hay datos de usuario disponibles.</div>
  }

  return (
    <div className="flex flex-col h-screen">
      <SystemHeader role={userData.role} />
      <div>
        <Outlet context={userData} />
      </div>
    </div>
  )
}

export default System