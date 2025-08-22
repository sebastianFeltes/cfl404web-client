function Cooperadora() {
  return (
    <div className="h-full w-full flex flex-col justify-evenly gap-8 pb-8 bg-[url(´https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg´)] bg-cover bg-center">
      {/* <img src="https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg" alt="imagen de fondo">*/}
      <h2 className="text-3xl text-white font-poppins font-medium p-2 text-center bg-customDark-blue">
        COOPERADORA CFL 404 BERISSO
      </h2>

      <div className="flex h-1/3 px-8">
        <p className="font-poppins  shadow-lg shadow-customGray p-2 rounded-lg">
          Nuestra Asociación Cooperadora ¿Sabías que el Centro de Formación
          Laboral N.º 404 de Berisso cuenta con una Asociación Cooperadora? Esta
          cooperadora está oficialmente reconocida por la Dirección de
          Cooperación Escolar de la Provincia de Buenos Aires y trabaja día a
          día para fortalecer nuestra institución. Gracias a los aportes y
          colaboraciones recibidas, podemos realizar mejoras y cubrir
          necesidades esenciales, destinando casi la totalidad de los fondos al
          mantenimiento y cuidado del edificio, como así también a la compra de
          insumos para las prácticas de los alumnos. Cada contribución es una
          inversión directa en un espacio de aprendizaje seguro, cómodo y de
          calidad para todos. Tu ayuda hace la diferencia. Un pequeño gesto… un
          gran cambio para todos Invertí en tu aprendizaje. Apoyá a tu
          cooperadora
        </p>
      </div>

      <div className="px-8 h-1/2 flex justify-between gap-8">
        <div className="border shadow-lg  shadow-customGray p-2 rounded-lg w-1/2 bg-white text-center">
          <p className="font-poppins">
            ¿Queres colaborar? Podes hacerlo con la siguiente información:
          </p>
          <p className="font-serif font-bold">Banco Provincia de Buenos Aires</p>
          <p className="font-serif font-bold">ALIAS: coop.cfl.404</p>
          <p className="font-serif font-bold">CBU: 0140032801503305438550</p>
          <p className="font-serif font-bold">CUIT: 30-71753985-7</p>
          <p className="font-poppins">
            IMPORTANTE: Por favor, luego de realizar la transferencia enviar el
            comprobante mediante WhatsApp al 221-319-2360. Muchas gracias!!!
          </p>
        </div>

        {/* Se armó maquetado DIV para agregar Memorias */}
        <div className="border shadow-lg  shadow-customGray p-2 rounded-lg  w-1/2 bg-white">
          ESPACIO RESERVADO PARA MEMORIAS
          <p className="font-poppins">
            Memorias de Nuestro Camino A lo largo de los años, el Centro de
            Formación Laboral N.º 404 de Berisso ha sido escenario de
            innumerables proyectos, logros y momentos compartidos. Este espacio
            es una ventana al pasado, donde las imágenes cuentan la historia de
            los emprendimientos, talleres y actividades que dejaron huella en
            nuestra comunidad educativa. Cada fotografía es más que un recuerdo:
            es testimonio del esfuerzo, la creatividad y la pasión de quienes
            formaron y forman parte de esta institución. Revivamos juntos estas
            memorias que nos inspiran a seguir creciendo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cooperadora;
