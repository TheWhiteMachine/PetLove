import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <div class="row bg-light fixed-top py-2 p-x-4">
        <div className="col-12  d-flex align-items-cemter mx-">
          <hi className="mx-3">PETLOVE</hi>
          <Link to="/" className="mx-3">
            Inicio
          </Link>
          <Link to="/pets" className="mx-3">
            Pets
          </Link>
          <Link to="/consejos" className="mx-3">
            Consejos
          </Link>
          <Link to="/contacto" className="mx-3">
            Contacto
          </Link>
        </div>
      </div>
    );
  }
}
