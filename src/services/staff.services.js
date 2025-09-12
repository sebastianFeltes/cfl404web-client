const BASE_URL = 'http://localhost:4000'

export async function getAllStaff() {
    const response = await fetch(`${BASE_URL}/staff`);
    const data = await response.json();
    return data;
}