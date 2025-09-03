import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <div className="container py-4">
          <h1 className="text-center">Bienvenido a Psicoturn</h1>
          <p className="text-center"><em>Tu espacio para agendar citas con psicólogos de confianza</em></p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
