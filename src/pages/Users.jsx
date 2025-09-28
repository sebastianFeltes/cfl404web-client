import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users.services";
import { useNavigate } from "react-router";

function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const res = await getAllUsers();
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
            <tr onClick={()=>navigate(`/admin/usuario/${user.id}`)} key={user.id} className="h-10 text-center border-b border-customLigth-blue hover:bg-customDark-blue/50 cursor-pointer">
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
