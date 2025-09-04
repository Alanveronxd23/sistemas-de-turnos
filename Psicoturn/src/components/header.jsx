import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          className="logo me-2"
          src="https://i.postimg.cc/cJDCH0RV/Consultorio-Ver-n.png"
          alt="Logo Psicoturn"
        />
        Psicoturno
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/informacion">Información</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/about">Acerca de</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/contact">Contacto</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/login" className="btn btn-light">Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
