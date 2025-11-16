import { getClients } from "../services/admin/adminService"
import { useEffect, useState } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"
import CreateClientModal from "./CreateClientModal"

export const ContentClients = () => {

  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchClients = async () => {
    const token = localStorage.getItem('login_token')
    try {
      const data = await getClients(token)
      console.log('Lista de clientes:', data)
      setClients(data.data)
    } catch (error) {
      console.error('Error fetching clients:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  const handleCreateSuccess = () => {
    fetchClients() 
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestión de Clientes</h1>
            <p className="text-gray-600 mt-1">Total de clientes: {clients.length}</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition">
            <Plus size={20} />
            Nuevo cliente
          </button>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-gray-500">Cargando clientes...</p>
          </div>
        )}

        {!loading && clients.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">No hay clientes registrados</p>
          </div>
        )}

        {!loading && clients.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Nombre</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Estado</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-900">{client.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{client.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{client.email}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        client.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {client.is_active ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition" title="Editar">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition" title="Eliminar">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <CreateClientModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleCreateSuccess}
      />
    </div>
  )
}