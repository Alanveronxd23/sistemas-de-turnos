import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Informacion from "./components/Pages/Informacion.jsx";
import Contact from "./components/Pages/Contact.jsx";
import About from "./components/Pages/about.jsx";

function App() 
{
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
