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

export const createAdmin = async (adminData, token) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(adminData)  
    })
    const data = await response.json()
    return data
}

export const createLawyer = async (lawyerData, token) => {
    const response = await fetch(`${API_URL}/admin/lawyers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(lawyerData)
    })
    const data = await response.json()
    return data
}

export const createClient = async (clientData, token) => {
    const response = await fetch(`${API_URL}/admin/clients`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(clientData)
    })
    const data = await response.json()
    return data
}