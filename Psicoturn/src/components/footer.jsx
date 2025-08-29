
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Nombre del consultorio */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Consultorio Psicoturn. Todos los derechos reservados.</p>
        
        {/* Redes sociales */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
          <a href="mailto:contacto@consultorio.com" className="hover:text-white">
            contacto@consultorio.com
          </a>
        </div>
      </div>
    </footer>
  );
}
