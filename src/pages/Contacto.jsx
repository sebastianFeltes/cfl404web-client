function Contacto() {
  return (
    <div className="w-full h-full flex flex-col bg-customWhite items-center justify-start py-2">
      {/* Social Media Cards */}
      <div className="flex w-full h-full justify-around">
        <div className="Card flex items-center justify-center scale-95 hover:scale-110 duration-300 ease-in-out bg-customLigth-blue shadow-lg shadow-customDark-blue h-48 w-40 rounded-lg px-2">
          {/* espacio para logo de WhatsApp */}
          <span className="w-2xl h-2/3 flex items-center justify-center"></span>
        </div>
        <div className="Card flex items-center justify-center scale-95 hover:scale-110 duration-300 bg-customLigth-blue shadow-lg shadow-customDark-blue h-48 w-40 rounded-lg px-2">
          {/* espacio para logo de Instagram */}
          <span className="w-2xl h-2/3 flex items-center justify-center"></span>
        </div>
        <div className="Card flex items-center justify-center scale-95 hover:scale-110 duration-300 bg-customLigth-blue shadow-lg shadow-customDark-blue h-48 w-40 rounded-lg px-2">
          {/* espacio para logo de Facebook */}
          <span className="w-2xl h-2/3 flex items-center justify-center"></span>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-fit flex justify-center py-2 scale-95 hover:scale-100 duration-300 ease-in-out shadow-lg shadow-customGray">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4754484568116!2d-57.89465340000001!3d-34.8694055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e4359488ffef%3A0x50402d4271c06af4!2sAvenida%20La%20Portada%204120%2C%20B1923%20Berisso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1755120820962!5m2!1ses!2sar"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación"
        />
      </div>
    </div>
  );
}

export default Contacto;
