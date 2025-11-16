import { X, AlertTriangle } from 'lucide-react'

export const DeleteConfirmModal = ({ isOpen, onConfirm, onCancel, itemName, isLoading }) => {
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full mx-4">
        <div className="flex items-center gap-3 p-6 border-b border-gray-200">
          <AlertTriangle size={24} className="text-red-500" />
          <h2 className="text-lg font-bold text-gray-900">Confirmar eliminación</h2>
        </div>

        <div className="p-6">
          <p className="text-gray-600">
            ¿Estás seguro de que deseas desactivar a <strong>{itemName}</strong>? 
            Esta acción no se puede deshacer.
          </p>
        </div>

        <div className="flex gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Eliminando...' : 'Eliminar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal