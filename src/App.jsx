import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import GuestLayout from "./layout/GuestLayout";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Cursos from "./pages/Cursos";
import Perfil from "./pages/Perfil";
import Inscripcion from "./pages/Inscripcion";
import Login from "./pages/Login";
import Estadisticas from "./pages/Estadisticas";
import Contacto from "./pages/Contacto";
import Cooperadora from "./pages/Cooperadora";
import Institucional from "./pages/Institucional";
import Beneficios from "./pages/Beneficios";
import Users from "./pages/Users";
import Attendance from "./pages/Attendance";
import Docentes from "./pages/Docentes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="cooperadora" element={<Cooperadora />} />
          <Route path="beneficios" element={<Beneficios />} />
          <Route path="institucional" element={<Institucional />} />
          <Route path="login" element={<Login />} />
          <Route path="estadisticas" element={<Estadisticas />} />
        </Route>
        <Route path="admin" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="inscripcion" element={<Inscripcion />} />
          <Route path="usuarios" element={<Users />} />

          <Route path="asistencia" element={<Attendance />} />
          <Route path="docentes" element={<Docentes/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
