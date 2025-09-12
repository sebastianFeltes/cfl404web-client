import { useEffect, useState } from "react";
import { getAllStaff } from "../services/staff.services";

function Docentes() {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    async function fetchDocentes() {
      const res = await getAllStaff();
      console.log(res);
      setDocentes(res.data);
    }
    fetchDocentes();
  }, []);

  return (
    <div>
      <table className="w-full border-2 border-customDark-blue">
        <thead className="bg-customDark-blue text-white">
          <th>Estado</th>
          <th>Apellido</th>
          <th>Nombre</th>
          <th>DNI</th>
          <th>N° Legajo</th>
          <th>Email</th>
          <th>Telefono</th>
        </thead>
        <tbody className="text-black">
          {docentes?.map((docente) => (
            <tr 
              key={docente?.id}
              className="h-10 text-center border-b border-customDark-blue hover:bg-customDark-blue/20 cursor-pointer"
            >
              <td className="h-10 flex items-center justify-center">
                {docente?.status?.name == "Activo" ? (
                  <span className="shadow-md bg-linear-to-r from-green-500 to-green-700 rounded-full w-6 h-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                ) : docente?.status?.name == "Inactivo" ? (
                  <span className="bg-linear-to-r from-red-500 to-red-700 rounded-full w-6 h-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="bg-linear-to-r from-gray-500 to-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </span>
                )}
              </td>
              <td>{docente?.lastName}</td>
              <td>{docente?.firstName}</td>
              <td>{docente?.dni}</td>
              <td>{docente?.recordNumber}</td>
              <td>{docente?.staffDetail?.email}</td>
              <td>{docente?.staffDetail?.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Docentes;
