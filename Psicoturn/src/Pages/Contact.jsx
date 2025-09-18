import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Contact.css";

const Contact = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(""); 

  const validate = () => {
    let newErrors = {};

    if (!values.name.trim()) 
    {
      newErrors.name = "El nombre es obligatorio";
    } else if (values.name.trim().length < 3) 
    {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    } else if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(values.name)) {
      newErrors.name = "El nombre solo puede contener letras y espacios";
    }

    if (!values.email.trim()) 
    {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) 
    {
      newErrors.email = "Ingrese un email válido";
    }

    if (!values.message.trim()) 
    {
      newErrors.message = "El mensaje es obligatorio";
    } else if (values.message.trim().length < 10) 
    {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    } else if (values.message.trim().length > 200) 
    {
      newErrors.message = "El mensaje no puede superar los 200 caracteres";
    }

    return newErrors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario válido:", values);
      setSubmitMessage("✅ Formulario enviado con éxito");
      setValues({ name: "", email: "", message: "" }); // limpia el form
    } else {
      setSubmitMessage("❌ Corrige los errores antes de enviar");
    }
  };

  return (
    <div className="container mt-5" data-aos="fade-up">
      <form onSubmit={handleForm} className="card p-4 shadow" data-aos="fade-up">
        <h1 className="mb-4 text-center" data-aos="fade-up">Contactanos</h1>

        <div className="mb-3" data-aos="fade-up">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            placeholder="Ingrese su nombre"
            onChange={handleInputChange}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3" data-aos="fade-up">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            placeholder="Ingrese su email"
            onChange={handleInputChange}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3" data-aos="fade-up">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <input
            type="text"
            name="message"
            id="message"
            value={values.message}
            placeholder="Ingrese su mensaje"
            onChange={handleInputChange}
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary" data-aos="fade-up">
          Enviar
        </button>
        {/* Mensaje de envío */}
        {submitMessage && (
          <div className="mt-3 text-center fw-bold">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
