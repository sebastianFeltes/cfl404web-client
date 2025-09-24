
const BASE_URL = 'HTTP://localhost:4000';

export async function getAllUsers () {
    const response = await fetch (`${BASE_URL}/users`);
    const data = await response.json();
    console.log(data);
    return data;
}

