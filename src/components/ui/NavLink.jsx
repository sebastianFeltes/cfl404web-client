import { Link } from "react-router";

function NavLink({ children, path }) {
  return <Link to={path}>{children}</Link>;
}

export default NavLink;
