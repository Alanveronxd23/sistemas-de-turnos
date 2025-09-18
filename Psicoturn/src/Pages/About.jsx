import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../css/About.css";
const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    return (
        <div className="container mt-5" data-aos="fade-up">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title d-flex justify-content-center" data-aos="fade-up">Acerca de nosotros</h1>
                    <p class="mb-3" data-aos="fade-up">
                      En <strong>PsicoTurnos</strong>, creemos que el acceso a la salud mental debe ser simple, rápido y accesible.
                      Por eso, desarrollamos una plataforma diseñada especialmente para facilitar la gestión de turnos en consultorios
                      psicológicos, centros de salud y profesionales independientes.
                    </p>

                    <p class="mb-4" data-aos="fade-up">
                      Nuestro objetivo es acompañar tanto a psicólogos como a pacientes, brindando una herramienta intuitiva que optimiza el
                      tiempo, reduce las ausencias y mejora la experiencia de atención.
                    </p>

                    <h3 class="h5 mt-4" data-aos="fade-up">Con <strong>PsicoTurnos</strong>, los profesionales pueden:</h3>
                    <ul class="list-group list-group-flush mb-4" data-aos="fade-up">
                      <li class="list-group-item" data-aos="fade-up">Gestionar su agenda de manera eficiente</li>
                      <li class="list-group-item" data-aos="fade-up">Confirmar, reprogramar o cancelar sesiones</li>
                      <li class="list-group-item" data-aos="fade-up">Acceder a un historial de turnos y pacientes</li>
                      <li class="list-group-item" data-aos="fade-up">Recibir recordatorios automáticos y notificaciones</li>
                    </ul>

                    <h3 class="h5" data-aos="fade-up">Y los pacientes pueden:</h3>
                    <ul class="list-group list-group-flush mb-4" data-aos="fade-up">
                      <li class="list-group-item" data-aos="fade-up">Solicitar turnos de forma rápida y segura</li>
                      <li class="list-group-item" data-aos="fade-up">Elegir horarios disponibles según su conveniencia</li>
                      <li class="list-group-item" data-aos="fade-up">Recibir confirmaciones y recordatorios al instante</li>
                    </ul>

                    <p>
                      Estamos comprometidos con el bienestar emocional y creemos que la tecnología debe ser un puente, no una barrera.
                      Por eso trabajamos constantemente para mejorar nuestra plataforma, escuchar a nuestros usuarios y adaptarnos a las
                      necesidades del ámbito psicológico.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;