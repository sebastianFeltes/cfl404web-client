const BASE_URL = 'http://localhost:4000';

export async function getAllAttendance() {
    const response = await fetch(`${BASE_URL}/attendance`);
    const data = await response.json(); 
    console.log(data)
    return data;
}