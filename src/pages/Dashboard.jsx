import { useEffect, useState } from "react";
import { getStudentsResumes } from "../services/resumes.services";

function Dashboard() {
  const [students, setStudents] = useState(0);
  
  useEffect(() => {
    async function fetchStudents() {
      const data = await getStudentsResumes();
      setStudents(data.students);
    }
    fetchStudents();
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
