import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Informacion from "./components/Pages/informacion.jsx";
import Contact from "./components/Pages/contacto.jsx";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;
