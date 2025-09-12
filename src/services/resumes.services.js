const BASE_URL = "http://localhost:4000";

export async function getStudentsResumes() {
  const response = await fetch(`${BASE_URL}/resumes/students`);
  const data = await response.json();
  return data;
}

export async function getCoursesResumes() {
  const response = await fetch(`${BASE_URL}/resumes/courses`);
  const data = await response.json();
  return data;
}

export async function getStaffResumes() {
  const response = await fetch(`${BASE_URL}/resumes/staff`);
  const data = await response.json();
  return data;
}

export async function getAttendanceResumes() {
  const response = await fetch(`${BASE_URL}/resumes/attendance`);
  const data = await response.json();
  return data;
}
