import { Link } from "react-router";

function NavLink({ children, path }) {
  return <Link className='flex items-center justify-center gap-2 h-10 w-36 font-bold font-poppins text-white/90 bg-gradient-to-b from-customDark-blue to-customDark-blue/90 border border-customSoft-blue shadow-md hover:to-customDark-blue hover:from-customDark-blue/90 hover:shadow-lg hover:shadow-black/50 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1' to={path}>{children}</Link>;
}

export default NavLink;
