const API_URL = import.meta.env.VITE_API_URL

export const getProfileById = async (clientId, token) => {
  try {
    const response = await fetch(`${API_URL}/profile/me?${clientId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return await response.json()
  } catch (error) {
    throw new Error('Error fetching client data', error)
  }
}

export const getCitas = async (clientId, token) => {
  try {
    const response = await fetch(`${API_URL}/appointments?clientId=${clientId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return await response.json()
  } catch (error) {
    throw new Error('Error fetching appointments data', error)
  }
}

export const updateProfile = async (clientId, profileData, token) => {
  try {
    const response = await fetch(`${API_URL}/profile/me?${clientId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(profileData)
    })
    return await response.json()
  } catch (error) {
    throw new Error('Error updating profile data', error)
  }
}