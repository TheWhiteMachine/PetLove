import React from "react";
export default class Bienvenida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "",
    };
    this.cambioValor = this.cambioValor.bind(this);
  }
  cambioValor(event) {
    let datoIngresado = event.target.value;
    this.setState({ valor: datoIngresado });
  }
  render() {
    return (
      <>
        <p className="pt-5">Cual es tu nombre?</p>
        <input
          type="text"
          placeholder="Tu nombre"
          onChange={this.cambioValor}
        ></input>
        <h4>Hola, {this.state.valor} </h4>
      </>
    );
  }
}
