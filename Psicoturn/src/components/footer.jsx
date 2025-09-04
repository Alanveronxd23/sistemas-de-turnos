import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {

  return (
    <footer className="text-white py-4 bg-dark">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <a href="/" className="d-flex justify-content-center align-items-center">
              <img
                src="https://i.postimg.cc/cJDCH0RV/Consultorio-Ver-n.png"
                alt="Logo"
                className="mx-2"
                style={{ maxWidth: "120px", height: "auto" }}
              />
            </a>
          </div>
          {/* Contacto */}
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <a href="tel:+123456789" className="d-block mb-2 text-white text-decoration-none">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              Teléfono
            </a>
            <a href="mailto:Alanjeremias2006.com" className="d-block text-white text-decoration-none">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Email
            </a>
          </div>
          {/* Redes */}
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white me-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
          {/* Copyright */}
          <div className="col-md-3 text-center">
            <small>
              &copy; {new Date().getFullYear()} Psicoturn. Todos los derechos reservados.
            </small>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
