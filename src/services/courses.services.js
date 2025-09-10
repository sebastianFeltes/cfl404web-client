const BASE_URL = `http://localhost:4000`
export async function getCourses() {
    const response = await fetch(`${BASE_URL}/courses`);
    const data = await response.json();
    console.log(data);
    
    return data;
}