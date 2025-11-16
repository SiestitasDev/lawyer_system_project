const API_URL = import.meta.env.VITE_API_URL

export const getLawyers = async (token) => {
    const response =  await fetch(`${API_URL}/admin/lawyers`, {
        method: 'GET',
        headers: {  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data
}

export const getClients = async (token) => {
    const response =  await fetch(`${API_URL}/admin/clients`, {
        method: 'GET',
        headers: {  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data
}

export const getAdmins = async (token) => {
    const response =  await fetch(`${API_URL}/user?role_id=1`, {
        method: 'GET',
        headers: {  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data
}
