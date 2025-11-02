import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Booking = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    lawyer: '',
    date: '',
    time: '',
    notes: ''
  })
  const [specialties, setSpecialties] = useState([])
  const [lawyers, setLawyers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await getSpecialties()
      setSpecialties(data)
    })()
  }, [])

  useEffect(() => {
    if (!form.specialty) return
    ;(async () => {
      const list = await getLawyers(form.specialty)
      setLawyers(list)
      setForm(prev => ({ ...prev, lawyer: list[0]?.id || '' }))
    })()
  }, [form.specialty])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!form.name || !form.email || !form.date || !form.time || !form.specialty || !form.lawyer) {
      setError('Completa los campos obligatorios (nombre, email, especialidad, abogado, fecha y hora).')
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const created = await createAppointment(form)
      setSuccess(created)
      // navegar a confirmación o limpiar formulario:
      // navigate('/booking/confirmation')
    } catch (err) {
      console.error('Error during appointment creation:', err)
      setError('No se pudo reservar la cita. Intenta más tarde.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex flex-col">
      <div className="max-w-4xl mx-auto w-full py-12 px-6">
        <h1 className="text-3xl font-semibold mb-6">Reservar cita</h1>

        <div className="bg-white/5 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div className="flex gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre completo" className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400" />
            </div>

            <div className="flex gap-4">
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400" />
              <select name="specialty" value={form.specialty} onChange={handleChange} className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400">
                <option value="">Seleccionar especialidad</option>
                {specialties.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>

            <div className="flex gap-4">
              <select name="lawyer" value={form.lawyer} onChange={handleChange} className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400">
                <option value="">Seleccionar abogado</option>
                {lawyers.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
              </select>

              <div className="flex gap-2 flex-1">
                <input name="date" type="date" value={form.date} onChange={handleChange} className="p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400 w-1/2" />
                <input name="time" type="time" value={form.time} onChange={handleChange} className="p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400 w-1/2" />
              </div>
            </div>

            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Motivo / notas (opcional)" className="p-3 bg-white/5 border border-gray-700 rounded h-24 focus:outline-none focus:border-yellow-400" />

            {error && <div className="text-yellow-300">{error}</div>}
            {success && <div className="text-green-400">Cita reservada (ID: {success.id}). Te llegará confirmación por email.</div>}

            <div className="flex items-center justify-between mt-2">
              <button type="submit" disabled={loading} className="bg-yellow-500 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 disabled:opacity-60">
                {loading ? 'Reservando...' : 'Reservar cita'}
              </button>
              <button type="button" onClick={() => navigate('/')} className="text-sm underline">Volver</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
