import React from "react";

function CardCursos() {
  return (
    <div className="border-2 rounded-lg flex flex-col w-60 h-80 justify-center items-center px-2 py-4 text-lg">
      <div className="w-full h-30 border"></div>
      <div className="border-2  ">
        <h2 className="font-serif">Modelado e Impresion 3D</h2>
      </div>
      <p className="font-serif">Duracion: 4 meses</p>
      <button className="font-serif">+info/inscripcion</button>
    </div>
  );
}

export default CardCursos;
