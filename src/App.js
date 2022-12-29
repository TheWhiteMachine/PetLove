import "./App.css";
import Menu from "./Components/menu";
import Footer from "./footer";
import Biennvenida from "./bienvenida";
import ContactoPage from "./paginas/ContactoPage";
import InicioPage from "./paginas/InicioPage";
import PetsPage from "./paginas/PetsPage";
import Consejos from "./paginas/consejos";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Menu />
        <Biennvenida />
        <div className="container pt-5">
          <Routes>
            <Route exact path="/" element={<InicioPage />}></Route>
            <Route path="/contacto" element={<ContactoPage />}></Route>
            <Route path="/pets" element={<PetsPage />}></Route>
            <Route path="/consejos" element={<Consejos />}></Route>
          </Routes>
          <img
            className="rounded mx-auto d-block"
            src="/img/mascotas.jpg"
            alt="encabezato"
            width="800px"
          ></img>
          <p>
            A excepción de quienes no se sienten atraídos por los animales todos
            somos, en principio, buenos candidatos para tener una mascota en
            casa como miembro de la familia. Para serlo, tenemos que elegir la
            mascota adecuada según el entorno familiar, el tamaño del hogar y
            los recursos de los que disponemos.
          </p>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
