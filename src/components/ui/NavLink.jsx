import { Link } from "react-router";

function NavLink({ children, path }) {
  return <Link className='h-12 w-40 font-bold font-poppins flex items-center justify-center gap-2 border text-white/90 shadow-md hover:shadow-lg shadow-customDark-blue/50 bg-gradient-to-b from-customDark-blue to-customDark-blue/90 border-customSoft-blue hover:from-customDark-blue hover:to-customDark-blue/80 hover:text-white hover:border-customDark-blue p-2 rounded-lg transition-all duration-300 ease-in-out' to={path}>{children}</Link>;
}

export default NavLink;
