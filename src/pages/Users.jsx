import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users.services";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await getAllUsers();
      console.log(res.users)
      setUsers(res.users);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <table className="w-full border-2 border-customDark-blue">
        <thead className="bg-customDark-blue text-white">
          <tr>
            <th>Nombre de usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr className="h-10 text-center border-b border-customLigth-blue">
              <td>{user?.username}</td>
              <td>{user?.firstName}</td>
              <td>{user?.lastName}</td>
              <td>{user?.email}</td>
              <td>{user?.role?.name}</td>
              <td>{user?.status?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
