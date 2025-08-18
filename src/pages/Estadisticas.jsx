import GraficoAsistencias from "../components/GraficoAsistencias";
import GraficoEgresados from "../components/GraficoEgresados";
import GraficosHistoricos from "../components/GraficosHistoricos";
import Graficos from "./Graficos";

function Estadisticas() {
  return (
    <div className="h-full w-full">
      <h1 className="px-4 py-4 font-poppins text-3xl bg-customDark-blue text-white">
        Estadisticas
      </h1>
      <div className="flex flex-row gap-4 justify-center border  rounded-lg px-2 py-2 font-poppins bg-customSoft-blue">
        <ul>
          <li>
            <button className="relative group px-6 py-2 text-lg font-semibold text-black rounded-md overflow-hidden">
              Asistencia
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-customDark-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            {/* <a href="">Asistencias</a> */}
          </li>
        </ul>
        <ul>
          <li>
            <button className="relative group px-6 py-2 text-lg font-semibold text-black rounded-md overflow-hidden">
              Egreso de Alumnos
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-customDark-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            {/* <a href="">Egreso de Alumnos</a> */}
          </li>
        </ul>
        <ul>
          <li>
            <button className="relative group px-6 py-2 text-lg font-semibold text-black rounded-md overflow-hidden">
              Datos Historicos
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-customDark-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            {/* <a href="">Datos Historicos</a> */}
          </li>
        </ul>
        <ul>
          <li>
            <button className="relative group px-6 py-2 text-lg font-semibold text-black rounded-md overflow-hidden">
              Graficos
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-customDark-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            {/* <a href="">Graficos</a> */}
          </li>
        </ul>
      </div>
      <Graficos/>
      <GraficosHistoricos/>
      <GraficoAsistencias />
      <GraficoEgresados />
    </div>
  );
}

export default Estadisticas;
