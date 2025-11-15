import { getClients } from "../services/admin/adminService"
import { useEffect, useState } from "react"

export const ContentClients = () => {

  const [clients, setClients] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('login_token')
    // Aquí puedes agregar la lógica para obtener y mostrar la lista de abogados usando el token
    const fetchClients = async () => {
      try {
        const data = await getClients(token)
        console.log('Lista de abogados:', data)
        setClients(data.data)
      } catch (error) {
        console.error('Error fetching lawyers:', error)
      }
    }

    fetchClients()
  },[])
  return (
    <>
      <div>
        <h2>Gestión de Clientes</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.is_active ? "Activo" : "Inactivo"}</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}