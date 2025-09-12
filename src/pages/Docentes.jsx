import { useEffect, useState } from "react";
import { getAllStaff } from "../services/staff.services";

function Docentes() {
  const [docentes, setDocentes] = useState([]);

  useEffect(()=>{
    async function fetchDocentes() {
        const res = await getAllStaff();
        setDocentes(res.data)
    }
    fetchDocentes()
  },[])

  return (
    <div>
      <table className="w-full border-2 border-customDark-blue">
        <thead className="bg-customDark-blue text-white">
          <th>Estado</th>
          <th>Apellido</th>
          <th>Nombre</th>
          <th>DNI</th>
          <th>N° Legajo</th>
        </thead>
        <tbody className="text-black">
            {docentes?.map((docente)=>(
              <tr className="h-10 text-center border-b border-customDark-blue">
                <td>
                  {docente?.statusId}
                </td>
                <td>
                  {docente?.lastName}
                </td>
                <td>
                  {docente?.firstName}
                </td>
                <td>
                  {docente?.dni}
                </td>
                <td>
                  {docente?.recordNumber}
                </td>
              </tr>
              
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Docentes;
