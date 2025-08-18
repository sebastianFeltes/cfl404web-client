function Contacto() {
  const socialIcons = [
    {
      icon: "src/assets/whatsappIcon.svg",
      hoverBorder: "hover:border-customLight-blue",
      title: "WhatsApp",
      link: "https://wa.me/2213192360",
    },
    {
      icon: "src/assets/instagramIcon.svg",
      hoverBorder: "hover:border-customLight-blue",
      title: "Instagram",
      link: "https://www.instagram.com/cfl404berisso/",
    },
    {
      icon: "src/assets/facebookIcon.svg",
      hoverBorder: "hover:border-customLight-blue",
      title: "Facebook",
      link: "https://www.facebook.com/cfl404berisso/",
    },
  ];

  const cardClasses =
    "Card flex flex-wrap items-center justify-center scale-95 hover:scale-100 duration-300 ease-in-out bg-customSoft-blue shadow-md shadow-customDark-blue border border-customDark-blue h-64 w-60 rounded-lg px-2";

  const spanClasses =
    "w-full h-20 flex items-center justify-center spin-container py-2";

  const iconClasses = "spin-self-hover transform w-20";

  return (
    <div className="w-full h-full flex flex-col bg-customWhite items-center justify-start py-2">
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
        <div className="flex flex-wrap w-3xl h-full justify-around py-2">
          {socialIcons.map(({ icon, hoverBorder, title, link }, index) => (
            <div key={index} className={`${cardClasses} ${hoverBorder}`}>
              <span className={spanClasses}>
                <img className={iconClasses} src={icon} alt={`${title} Icon`} />
              </span>
              <a
                href={link}
                target="_blank"
                className="text-center font-semibold text-lg bg-customDark-blue hover:bg-customLigth-blue text-white px-4 py-2 rounded-lg transition-colors duration-300 no-underline"
              >
                {title}
              </a>
            </div>
          ))}
        </div>
        <div className="espacio w-full h-20"></div>

        {/* Mapa */}
        <div className="w-3xl h-full flex flex-wrap justify-center py-2 scale-3xl hover:scale-103 duration-300 ease-in-out shadow-lg shadow-customGray rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4754484568116!2d-57.89465340000001!3d-34.8694055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e4359488ffef%3A0x50402d4271c06af4!2sAvenida%20La%20Portada%204120%2C%20B1923%20Berisso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1755120820962!5m2!1ses!2sar"
            width="1000"
            height="fit"
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
