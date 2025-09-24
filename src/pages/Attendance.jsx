import { useEffect, useState } from "react";
import { getAllAttendance } from "../services/attendance.services";
import CursoCard from "../components/CursoCard";

function Attendances() {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    async function fetchAttendances() {
      const res = await getAllAttendance();
      setAttendances(res.attendance);
    }
    fetchAttendances();
  }, []);
  return (
    <div>
      <table className="w-full border-2 border-customDark-blue">
        <thead className="bg-customDark-blue text-white">
          <th>Estudiante</th>
          <th>Curso</th>
          <th>Hora</th>
          <th>Fecha</th>
          <th>Tipo de Asistencia</th>
        </thead>
        <tbody className="text-black">
          {attendances?.map((attendance) => (
            <tr className="h-10 text-center border-b border-customDark-blue" key={attendance.id}>
              <td>{attendance?.courseStudent?.student?.lastName} {attendance?.courseStudent?.student?.firstName}</td>
              <td>{attendance?.courseStudent?.course?.name}</td>
              <td>{attendance.hour}</td>
              <td>{attendance.date}</td>
              <td>{attendance.codeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CursoCard title={"Programacion Web"} href={"https://www.pexels.com/es-es/foto/ordenador-portatil-negro-y-gris-546819/"} />
    </div>
  );
}

export default Attendances;
