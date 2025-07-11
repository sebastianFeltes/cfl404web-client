import { Outlet } from "react-router"
import GuestNavbar from "../components/GuestNavbar"

function GuestLayout() {
  return (
    <div>
        <GuestNavbar/>
        <p>Invitado</p>
        <Outlet/>
    </div>
  )
}

export default GuestLayout