import "./css/header.css";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          className="logo me-2"
          src="https://i.postimg.cc/cJDCH0RV/Consultorio-Ver-n.png"
          alt="Logo Psicoturn"
        />
        Psicoturno
      </a>

      {/* Botón hamburguesa */}
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

      {/* Menú de navegación */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/about">Informacion</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/about">Acerca de</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/contact">Contacto</a>
          </li>
          <li className="nav-item mx-2">
            <a href="/login" className="btn btn-light">Iniciar sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
