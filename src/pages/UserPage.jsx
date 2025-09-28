import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../services/users.services";

function UserPage() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserById(id);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Datos del usuario</h2>
      <button
        onClick={() => {
          setModoEdicion(!modoEdicion);
        }}
      >
        {modoEdicion ? "Aceptar" : "Editar"}
      </button>
      <p>
        Nombre:
        <input type="text" value={user?.firstName} disabled={!modoEdicion} />
      </p>
      <p>
        Nombre:
        {user?.lastName}
      </p>
      <p>
        Estado:
        {user?.status?.name}
      </p>
    </div>
  );
}

export default UserPage;
