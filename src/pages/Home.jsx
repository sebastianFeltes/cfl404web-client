import { useEffect, useState } from "react";
import imagen from "../assets/fotofondo.jpg";
import logo from "../assets/logo_cfl404.svg";
import { getRoles } from "../services/auth.services";

function Home() {
  const [roles, setRoles] = useState("");
  useEffect(() => {
    async function fetchRoles() {
      const res = await getRoles();
      return setRoles(res);
    }
    fetchRoles();
  }, []);
  return (
    <div className="flex flex-row h-full w-full  ">
      <img
        src={imagen}
        className="w-screen h-screen absolute -z-10 top-0 left-0"
        alt=""
      />
      <div className="w-screen h-screen absolute -z-10 top-0 left-0 bg-gradient-to-l from-white/70 to-white/20"></div>
      <div className="w-1/2 h-full flex justify-center items-center ">
        <img
          src={logo}
          style={{
            filter: "drop-shadow(5px 2px 20px #37a5dd)",
          }}
          className="h-5/8  w-5/8"
          alt=""
        />
        {/* <p className="text-6xl text-customDark-blue font-sans font-light">CFL N°404</p> */}
      </div>

      <div className="w-1/2 text-customDark-blue text-4xl flex flex-col justify-center items-center font-sans">
        <p>
          <span className="text-shadow-lg font-semibold">EDUCACION <p>{roles?.respuesta}</p> </span>
          para el presente.
          {/* <span className="text-shadow-lg">  PRESENTE</span> */}
        </p>
        <p>
          {/* <span className="text-shadow-lg">TRABAJO  </span> */}
          Trabajo para el
          <span className="text-shadow-lg font-semibold"> FUTURO.</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
