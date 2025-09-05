import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../css/Informacion.css";

const Informacion = () => (
    <>
        <div className="container my-5 informacion-container">
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">Psicoturno</h1>
                    <h2 className="card-subtitle text-center mb-3 text-muted">Gestión de Turnos</h2>
                    <p className="card-text">
                        <strong>Psicoturno </strong>es una plataforma diseñada para facilitar la gestión de turnos en consultorios psicológicos y de salud. Nuestro sistema permite a los profesionales organizar sus agendas de manera eficiente y a los pacientes reservar sus citas de forma rápida y sencilla.
                    </p>
                    <h3 className="mt-4">¿Qué ofrece Psicoturno?</h3>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">Reserva de turnos online para pacientes</li>
                        <li className="list-group-item">Gestión de agenda para profesionales</li>
                        <li className="list-group-item">Recordatorios automáticos de turnos</li>
                        <li className="list-group-item">Historial de turnos y pacientes</li>
                    </ul>
                    <p className="card-text">
                        Con <strong>Psicoturno</strong>, optimizá el tiempo de tu consultorio y mejorá la experiencia de tus pacientes.
                    </p>
                </div>
            </div>
        </div>
        <a href="https://wa.me/5493416923641?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20control%20de%20gastos" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span className="whatsapp-text" style={{ fontSize: 13 }}>Chatea por Whatsapp</span>
        </a>
    </>
);

export default Informacion;