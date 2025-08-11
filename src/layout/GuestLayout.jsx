import { Outlet } from "react-router"
import GuestNavbar from "../components/GuestNavbar"

function GuestLayout() {
  return (
    <div className="w-screen h-screen">
        <GuestNavbar/>
        <Outlet/>
    </div>
  )
}

export default GuestLayout