function Contacto() {
  const socialIcons = [
    {
      icon: 'src/assets/whatsappIcon.svg',
      hoverBorder: 'hover:border-customLight-blue',
      title: '2213192360',
      link: 'https://wa.me/2213192360',
    },
    {
      icon: 'src/assets/instagramIcon.svg',
      hoverBorder: 'hover:border-customLight-blue',
      title: '@cfl404berisso',
      link: 'https://www.instagram.com/cfl404berisso/',
    },
    {
      icon: 'src/assets/facebookIcon.svg',
      hoverBorder: 'hover:border-customLight-blue',
      title: 'CFL 404 Berisso',
      link: 'https://www.facebook.com/cfl404berisso/',
    },
  ];

  const cardClasses =
    'Card flex items-center justify-center scale-95 hover:scale-100 duration-300 ease-in-out bg-customSoft-blue shadow-md shadow-customDark-blue border border-customDark-blue h-25 w-34 rounded-lg px-2';

  const spanClasses =
    'w-20 h-20 flex items-center justify-center spin-container py-2';

  const iconClasses = "spin-self-hover transform w-16";

  const buttonClasses = 'w-20 h-20 flex items-center justify-center spin-container py-2';

  {/*const [users, setUsers] = useState("");
  useEffect(() => {
    async function fetchUsers() {
      const res = await getUsers();
      return setUsers(res);
    }
    fetchUsers();
  }, []);
  */}
  return (
    <div className="w-full h-full flex flex-col bg-customWhite items-center">
      <style>
        {`
          @keyframes spinSelf {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .Card:hover .spin-self-hover {
            transform-origin: center;
            animation: spinSelf 0.5s linear;
          }
        `}
      </style>

      <h1 className="font-extrabold font-serif text-customDark-blue text-3xl py-2">
        ¡Dónde encontrarnos!
      </h1>

      <div className="flex flex-col w-3xl h-full py-2 gap-4">
        {socialIcons.map(({ icon, hoverBorder, title, link }, index) => (
          <div key={index} className="flex justify-center items-center gap-4">
            {/* Contenedor del icono */}
            <a
              href={link}
              target="_blank"
              className={`${cardClasses} ${hoverBorder} cursor-pointer`}
            >
              <span className={spanClasses}>
                <img className={iconClasses} src={icon} alt={`${title} Icon`} />
              </span>
            </a>

            {/* Botón separado */}
            <a href={link} target="_blank" className={buttonClasses}>
              {title}
            </a>
          </div>
        ))}
      </div>
      {/* Divisor */}
      <div className="w-full h-20"></div>

      {/* Mapa */}
      <div className="flex flex-col items-center w-full">
        <h2 className="font-bold font-serif text-customDark-blue text-2xl py-4">
          Nuestra Ubicación
        </h2>
        <p className="text-customDark-blue text-lg mb-4 text-center">
          📍 Avenida La Portada 4120, B1923 Berisso, Provincia de Buenos Aires
        </p>
        <div className="w-3xl h-full flex flex-wrap justify-center py-2 scale-3xl hover:scale-103 duration-300 ease-in-out shadow-lg shadow-customGray rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4754484568116!2d-57.89465340000001!3d-34.8694055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e4359488ffef%3A0x50402d4271c06af4!2sAvenida%20La%20Portada%204120%2C%20B1923%20Berisso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1755120820962!5m2!1ses!2sar"
            width="1000"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación"
          />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
