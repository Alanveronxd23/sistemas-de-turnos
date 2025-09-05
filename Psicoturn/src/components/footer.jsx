import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4">
      {/* Mapa */}
      <div className="container-fluid p-0">
        <iframe
          title="Ubicación - Rosario, Santa Fe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83338.48505592183!2d-60.73533572303362!3d-32.96337202583404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab11d528b38d%3A0xce854940e3f7e114!2sEntre%20R%C3%ADos%20%26%20Zeballos%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e1!3m2!1ses!2sar!4v1749477230477!5m2!1ses!2sar"
          style={{ border: 0, width: "100%", height: "400px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Primera fila */}
      <div className="container text-center text-md-start mt-4">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-3 mb-3">
            <Link to="/" aria-label="Inicio">
              <img
                src="https://i.postimg.cc/RhcT0DjL/logo.png"
                alt="MiLogo"
                width="90"
                height="90"
                className="img-fluid"
              />
            </Link>
          </div>

          {/* Redes */}
          <div className="col-md-3 mb-3">
            <div className="d-flex justify-content-center gap-3 fs-3">
              <a href="#" aria-label="Whatsapp" className="text-light">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" aria-label="Instagram" className="text-light">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="GitHub" className="text-light">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="col-md-6 mb-3 text-md-end">
            <h5>Contacto</h5>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +54 11 1234 5678
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> GestionCaos@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Rosario, Santa Fe, Argentina
            </p>
          </div>
        </div>
      </div>

      <hr className="bg-light" />

      {/* Segunda fila */}
      <div className="container text-center pb-3">
        <div className="mb-2">
          <Link to="/politica/privacidad" className="text-light text-decoration-none mx-2">
            Privacidad
          </Link>
          |
          <Link to="/politica/Politica_cookies" className="text-light text-decoration-none mx-2">
            Política de cookies
          </Link>
          |
          <Link to="/politica/terminos" className="text-light text-decoration-none mx-2">
            Términos y condiciones
          </Link>
          |
          <Link to="/politica/ayuda" className="text-light text-decoration-none mx-2">
            <FontAwesomeIcon icon={faCircleInfo} /> Ayuda
          </Link>
        </div>
        <small>&copy; 2025 Gestión CAOS. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
