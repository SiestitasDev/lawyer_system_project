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
  const [recent, setRecent] = useState([])

  // Local mocks (no backend)
  const mockSpecialties = [
    { id: 'laboral', name: 'Derecho Laboral' },
    { id: 'civil', name: 'Derecho Civil' },
    { id: 'penal', name: 'Derecho Penal' },
    { id: 'corporativo', name: 'Derecho Corporativo' }
  ]

  const mockLawyers = {
    laboral: [
      { id: 'l1', name: 'Dr. Pedro Villanueva' },
      { id: 'l2', name: 'Dra. María López' }
    ],
    civil: [
      { id: 'l3', name: 'Dr. Jorge Ramos' },
      { id: 'l6', name: 'Dra. Lucía Pérez' }
    ],
    penal: [
      { id: 'l4', name: 'Dra. Ana Ruiz' }
    ],
    corporativo: [
      { id: 'l5', name: 'Dr. Carlos Mendoza' }
    ]
  }

  useEffect(() => {
    // cargar datos locales
    setSpecialties(mockSpecialties)
    const stored = JSON.parse(localStorage.getItem('appointments') || '[]')
    setRecent(stored.slice(0, 5))
  }, [])

  useEffect(() => {
    if (!form.specialty) {
      setLawyers([])
      setForm(prev => ({ ...prev, lawyer: '' }))
      return
    }
    const list = mockLawyers[form.specialty] || []
    setLawyers(list)
    setForm(prev => ({ ...prev, lawyer: list[0]?.id || '' }))
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

  const createLocalAppointment = async (payload) => {
    // simula latencia
    await new Promise(r => setTimeout(r, 500))
    const id = 'local-' + Date.now()
    const record = { id, ...payload }
    const prev = JSON.parse(localStorage.getItem('appointments') || '[]')
    const updated = [record, ...prev]
    localStorage.setItem('appointments', JSON.stringify(updated))
    return record
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const created = await createLocalAppointment(form)
      setSuccess(created)
      setRecent(prev => [created, ...prev].slice(0, 5))
      // limpiar formulario (opcional)
      setForm({
        name: '',
        email: '',
        phone: '',
        specialty: '',
        lawyer: '',
        date: '',
        time: '',
        notes: ''
      })
    } catch (err) {
      console.error(err)
      setError('No se pudo reservar la cita localmente.')
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
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="flex gap-4">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
              />
              <select
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
              >
                <option className="text-black" value="">Seleccionar especialidad</option>
                {specialties.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>

            <div className="flex gap-4">
              <select
                name="lawyer"
                value={form.lawyer}
                onChange={handleChange}
                className="flex-1 p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
              >
                <option className="text-black" value="">Seleccionar abogado</option>
                {lawyers.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
              </select>

              <div className="flex gap-2 flex-1">
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400 w-1/2"
                />
                <input
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  className="p-3 bg-white/5 border border-gray-700 rounded focus:outline-none focus:border-yellow-400 w-1/2"
                />
              </div>
            </div>

            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Motivo / notas (opcional)"
              className="p-3 bg-white/5 border border-gray-700 rounded h-24 focus:outline-none focus:border-yellow-400"
            />

            {error && <div className="text-yellow-300">{error}</div>}
            {success && <div className="text-green-400">Cita reservada (ID: {success.id}). Se almacenó localmente.</div>}

            <div className="flex items-center justify-between mt-2">
              <button type="submit" disabled={loading} className="bg-yellow-500 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 disabled:opacity-60">
                {loading ? 'Reservando...' : 'Reservar cita'}
              </button>
              <div className="flex gap-4 items-center">
                <button type="button" onClick={() => navigate('/')} className="text-sm underline">Volver</button>
                <button type="button" onClick={() => {
                  const all = JSON.parse(localStorage.getItem('appointments') || '[]')
                  setRecent(all.slice(0,5))
                  alert(`Citas guardadas localmente: ${all.length}`)
                }} className="text-sm underline">Ver guardadas</button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Últimas reservas</h2>
          {recent.length === 0 && <p className="text-gray-400">No hay reservas aún.</p>}
          <ul className="space-y-2">
            {recent.map(r => (
              <li key={r.id} className="bg-white/3 p-3 rounded flex justify-between">
                <div>
                  <div className="font-semibold">{r.name} — {r.email}</div>
                  <div className="text-sm text-gray-300">{r.specialty} · {r.lawyer} · {r.date} {r.time}</div>
                </div>
                <div className="text-sm text-gray-400">{r.id}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Booking