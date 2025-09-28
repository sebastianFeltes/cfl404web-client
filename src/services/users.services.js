const BASE_URL = "HTTP://localhost:4000";

export async function getAllUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getUserById(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();
  return data;
}
