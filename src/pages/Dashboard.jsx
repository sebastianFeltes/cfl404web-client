import { useEffect, useState } from "react";
import { getStudentsResumes } from "../services/resumes.services";

function Dashboard() {
  const [students, setStudents] = useState(0);
  const [userData, setUserData] = useState({
    username: "seba",
    rolId: 4,
  });
  useEffect(() => {
    async function fetchStudents() {
      const res = await getStudentsResumes();
      setStudents(res.data);
    }
    fetchStudents();
  }, []);

  return userData?.rolId >= 4 ? (
    <div>
      <div className="border rounded w-fit p-4">
        <h2>Cantidad de alumnos</h2>
        <p>{students?.length}</p>
      </div>
    </div>
  ) : (
    <div>
      <p>Tus cursos</p>
    </div>
  );
}

export default Dashboard;
