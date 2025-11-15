const API_URL = import.meta.env.VITE_API_URL

export const registerService = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Error en el registro')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error during registration:', error)
    throw new Error(`Error during registration: ${error.message}`)
  }
}