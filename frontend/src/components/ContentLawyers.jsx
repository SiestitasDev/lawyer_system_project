import { useEffect, useState } from "react"
import { getLawyers } from "../services/admin/adminService"

export const ContentLawyers = () => {

  const [lawyers, setLawyers] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('login_token')
    // Aquí puedes agregar la lógica para obtener y mostrar la lista de abogados usando el token
    const fetchLawyers = async () => {
      try {
        const data = await getLawyers(token)
        console.log('Lista de abogados:', data)
        setLawyers(data.data)
      } catch (error) {
        console.error('Error fetching lawyers:', error)
      }
    }

    fetchLawyers()
  },[])
  return (
    <>
      <div>
        <h2>Gestión de Abogados</h2>
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
          {lawyers.map((lawyer) => (
            <tr key={lawyer.id}>
              <td>{lawyer.id}</td>
              <td>{lawyer.name}</td>
              <td>{lawyer.email}</td>
              <td>{lawyer.is_active ? "Activo" : "Inactivo"}</td>
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