import React from "react";

export default class Suscripcion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
    };
    this.submited = this.submited.bind(this);
    this.changed = this.changed.bind(this);
  }

  submited(event) {
    alert("Gracias te enviaremos nuestra newsletter a" + this.state.mail);
    event.preventDefault();
  }

  changed(event) {
    this.setState({
      mail: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="container mx-auto mt-4">
          <h3>Suscríbete a nuestra NEWSLETTER</h3>
          <h5>
            Recibe en tu mail una invasión de mascotas, el único spam que te
            mejarará el día
          </h5>
          <form onSubmit={this.submited}>
            <div className="form-group">
              <label>Mail</label>
              <input
                type="mail"
                className="form-control"
                onChange={this.changed}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                size="30"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Enviar
            </button>
          </form>
        </div>
      </>
    );
  }
}
