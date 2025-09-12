const BASE_URL = 'http://localhost:4000';

export async function getRoles() {
    const response = await fetch(`${BASE_URL}/roles`);
    const data = await response.json(); 
    return data;
}


