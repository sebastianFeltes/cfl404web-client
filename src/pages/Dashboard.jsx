import { useEffect, useState } from "react";
import { getStudentsResumes } from "../services/resumes.services";

function Dashboard() {
  const [students, setStudents] = useState(0);
  useEffect(() => {
    async function fetchStudents() {
      const res = await getStudentsResumes();
      setStudents(res.data);
    }
    fetchStudents();
  }, []);

  return <>Dashboard cantidad de estudiantes:{students}</>;
}

export default Dashboard;
