import { NavLink } from "react-router-dom";
import useUsers from "../hook/useUsers";

const Users = () => {
  const { users, loading, error } = useUsers();
  return (
    <div>
      {loading && <h1>Cargando...</h1>}
      {!loading && error && <h1>Algo salio mal !!</h1>}
      {!loading &&
        users.length > 0 &&
        users.map((user, index) => (
          <li key={index}>
            <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
    </div>
  );
};

export default Users;
