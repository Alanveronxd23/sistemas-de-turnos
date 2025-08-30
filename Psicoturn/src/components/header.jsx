import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
            <img src="https://i.postimg.cc/cCnYyK3s/Chat-GPT-Image-29-ago-2025-11-04-14-1.png" alt="logo" witch={75} height={55} />
            Psicoturn</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Informacion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Acerca</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;