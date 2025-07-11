import { Outlet } from "react-router"
import AppNavbar from "../components/AppNavbar"

function AppLayout() {
  return (
    <div>
      <AppNavbar/>
      <p>Interno</p>
        <Outlet/>
    </div>
  )
}

export default AppLayout