import React from "react";

export default class ContactoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      mensaje: "",
    };
    this.submited = this.submited.bind(this);
    this.changed = this.changed.bind(this);
  }

  submited(event) {
    alert("Formulario enviado perteneceinte a " + this.state.nombre);
    event.preventDefault();
  }

  changed(event) {
    this.setState({
      nombre: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="container mx-auto">
          <h2>CONTACTO</h2>
          <h3>Escribenos un mensaje</h3>
          <form onSubmit={this.submited}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                onChange={this.changed}
              />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </>
    );
  }
}
