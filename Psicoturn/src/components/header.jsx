import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container-fluid">
      <Link className="navbar-brand d-flex align-items-center" to="/">Psicoturno</Link>

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
    <ul className="navbar-nav ms-auto d-flex gap-3 align-items-center">
      <li className="nav-item">
        <Link className="nav-link d-flex align-items-center" to="/">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link d-flex align-items-center" to="/informacion">Información</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link d-flex align-items-center" to="/about">Acerca de</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link d-flex align-items-center" to="/contact">Contacto</Link>
      </li>
      <li className="nav-item">
        <Link className="btn btn-light d-flex align-items-center" to="/login">Iniciar sesión</Link>
      </li>
    </ul>
      </div>
    </div>
  </header>
);

export default Header;
