
# 🧠 PsicoTurnos

Sistema web para la gestión de turnos en un consultorio de psicología.  
Proyecto desarrollado como **Trabajo Práctico Integrador (TPI)** de Programación III (TUP - UTN FRRO).  

---

## 📌 Tecnologías utilizadas

### Frontend
- React  
- React Router
- Context API (manejo de sesión y turnos)  
- Fetch (para comunicación con backend)  
- Css / Bootstrap (para estilos, opcional)

### Backend
- Node.js + Express  
- Base de datos (MySQL / PostgreSQL / MongoDB según elección)  
- JWT para autenticación de usuarios  
- Bcrypt para encriptación de contraseñas  

---

## 📂 Estructura del proyecto

📂src/

├── components/ # Componentes reutilizables

│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── TurnoCard.jsx
│ ├── UserForm.jsx
│ └── HorarioForm.jsx
│
├── pages/ # Páginas principales
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── MisTurnos.jsx
│ ├── ReservarTurno.jsx
│ ├── PsicologoAgenda.jsx
│ └── AdminUsuarios.jsx
│
├── context/ # Context API
│ ├── AuthContext.jsx
│ └── TurnosContext.jsx
│
├── services/ # Llamadas al backend
│ └── api.js
│
├── routes/ # Definición de rutas
│ └── AppRouter.jsx
│
├── App.jsx
└── index.jsx

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/psicologos-turnos.git
    ```
2. Instala las dependencias:
    ```bash
    cd psicologos-turnos
    npm install
    ```
3. Configura las variables de entorno según el archivo `.env.example`.
4. Inicia la aplicación:
    ```bash
    npm start
    ```

