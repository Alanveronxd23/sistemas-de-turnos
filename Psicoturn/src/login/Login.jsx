import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() 
{
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => 
  {
    AOS.init({ duration: 1000 });
  }, []);

  const validate = () => 
  {
    const newErrors = {};
      
    if (!values.email.trim()) 
    {
      newErrors.email = "El email es obligatorio";
    } 
      
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) 
    {
      newErrors.email = "Ingrese un email válido";
    }

    if (!values.password.trim()) 
    {
      newErrors.password = "La contraseña es obligatoria";
    } 
      
    else if (values.password.trim().length < 7) 
    {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

      return newErrors;
  };

  const handleSubmit = (e) => 
  {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        setSubmitMessage("¡Bienvenido!");
        console.log("Datos enviados:", values);
        setValues({ email: "", password: "" });
      } else {
        setSubmitMessage("");
      }
  };

  const handleChange = (e) => 
  {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4 shadow" data-aos="fade-up">
        <h2 className="mb-3 d-flex justify-content-center">Iniciar Sesión</h2>
        {submitMessage && <div className="md-3 d-flex justify-content-center">{submitMessage}</div>}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
