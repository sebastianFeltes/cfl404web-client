import { useEffect, useState } from "react";
import { getCourses } from "../services/courses.services";

{
  /*   staffId             Int      @map("staff_id")
  startDate           DateTime? @map("start_date")
  endDate             DateTime? @map("end_date")
  innasistanceAllowed Int?      @map("innasistance_allowed")
  lectiveYear         Int      @map("lective_year")
  teachingHours       Int?      @map("teaching_hours")
  totalDays           Int?      @map("total_days")
  totalClasses        Int?      @map("total_classes")
  statusId            Int      @map("status_id") */
}

function Cursos() {
  const [courses, setCourses] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      const res = await getCourses();
      setCourses(res.courses);

    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h2 className="relative z-10 text-3xl text-white font-poppins font-medium p-2 text-center bg-customDark-blue">
        CURSOS
      </h2>

      <table className="w-full border-2 border-customDark-blue">
        <thead className="bg-customLigth-blue text-white">
          <th>Curso</th>
          <th>Docente</th>
          <th>Fecha Inicio</th>
          <th>Fecha Final</th>
          <th>Inasistencias Permitidas</th>
          <th>Año Lectivo</th>
          <th>Horas Catedra</th>
          <th>Total Dias</th>
          <th>Total Clases</th>
        </thead>

        <tbody className="text-black">
          {courses &&courses?.map((course) => (
            <tr key={course.id} className="h-10 text-center border-b">
              <td>{course?.name}</td>
              <td>{course?.staffId}</td>
              <td>{course?.startDate}</td>
              <td>{course?.endDate}</td>
              <td>{course?.innasistanceAllowed}</td>
              <td>{course?.lectiveYear}</td>
              <td>{course?.teachingHours}</td>
              <td>{course?.totalDays}</td>
              <td>{course?.totalClasses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cursos;
