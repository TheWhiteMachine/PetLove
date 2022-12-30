import "./App.css";
import Menu from "./Components/menu";
import Footer from "./footer";
import Biennvenida from "./bienvenida";
import ContactoPage from "./paginas/ContactoPage";
import InicioPage from "./paginas/InicioPage";
import PetsPage from "./paginas/PetsPage";
import Consejos from "./paginas/consejos";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ListaGatos from "./paginas/ListaGatos";
function App() {
  return (
    <>
      <Router>
        <Menu />

        <Routes>
          <Route exact path="/" element={<InicioPage />}></Route>
          <Route path="/contacto" element={<ContactoPage />}></Route>
          <Route path="/pets" element={<PetsPage />}></Route>
          <Route path="/consejos" element={<Consejos />}></Route>
          <Route path="/listagatos" element={<ListaGatos />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
