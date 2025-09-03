import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  return (
    <footer className="text-white py-4 bg-dark">

      <section className="d-flex justify-content-around align-items-center">
        {/* Logo */}
        <a href="/" className="d-flex align-items-center">
          <img
            src="https://i.postimg.cc/cJDCH0RV/Consultorio-Ver-n.png"
            alt="Logo"
            className="mx-2"
          />
        </a>
        {/* Contacto */}
        <div>
          <a href="tel:+123456789" className="d-block mb-2 text-white">
            <FontAwesomeIcon icon={faPhone} />Telefono
          </a>
          <a href="@Alanjeremias2006.com" className="d-block text-white">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </div>

        {/* Redes */}
        <div className="d-flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <small>&copy; {new Date().getFullYear()} Psicoturn. Todos los derechos reservados.</small>
      </section>

    </footer>
  );
};

export default Footer;
