import React from "react";
export default class Bienvenida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "",
    };
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
          onChange={this.cambiaValor}
        ></input>
        <h4>Hola, </h4>
        <p>{this.state.valor}</p>
      </>
    );
  }
}
