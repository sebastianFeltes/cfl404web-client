const BASE_URL = "http://localhost:4000";

export async function getAttendancesStats() {
  const response = await fetch(`${BASE_URL}/stats/attendances`);
  const data = await response.json();
  return data;
}

export async function getStudentsStats() {
  const response = await fetch(`${BASE_URL}/stats/students`);
  const data = await response.json();
  return data;
}

export async function getCoursesStats() {
  const response = await fetch(`${BASE_URL}/stats/cources`);
  const data = await response.json();
  return data;
}

export async function getStaffsStats() {
  const response = await fetch(`${BASE_URL}/stats/staffs`);
  const data = await response.json();
  return data;
}
