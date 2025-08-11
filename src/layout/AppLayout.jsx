import { Outlet } from "react-router"
import AppNavbar from "../components/AppNavbar"

function AppLayout() {
  return (
    <div className="h-screen w-screen">
      <AppNavbar/>
      <Outlet/>
    </div>
  )
}

export default AppLayout