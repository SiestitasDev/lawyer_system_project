import { useNavigate } from "react-router-dom"
import logo from "../../public/img/logo.png"

export const SystemHeader = ({ role }) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('login_token')
    localStorage.removeItem('user_data')
    navigate('/')
  }

  const renderHeaderItems = () => {
    switch(role) {
      case 'CLIENT':
        return(
          <>
            <button onClick={() => navigate('/system/profile')} className="text-white">Perfil</button>
            <button className="text-white">Ver citas</button>
          </>
        )
      case 'LAWYER':
        return(
          <>
            <button className="text-white">Perfil</button>
            <button className="text-white">Ver casos</button>
            <button className="text-white">Ver citas</button>
          </>
        )
      case 'ADMIN':
        return(
          <>
            <button className="text-white">Inicio</button>
            <button onClick={() => navigate('/system/profile')} className="text-white">Perfil</button>
            <button onClick={() => navigate('/system/clients')} className="text-white">Gestión de clientes</button>
            <button onClick={() => navigate('/system/lawyers')} className="text-white">Gestión de abogados</button>
            <button onClick={() => navigate('/system/admins')} className="text-white">Gestión de Administradores</button>
            <button className="text-white">Gestión de citas</button>
          </>
        )
    }
  }

  return(
    <header className="flex justify-between items-center p-4 bg-black">
      <div>
        <img src={logo} alt="Logo" className="w-70"/>
      </div>
      <div className="flex gap-x-4">
        {renderHeaderItems()}
      </div>
      <div>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white px-4 py-2 rounded-md" 
        >
          Volver
        </button>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  )
}

export default SystemHeader