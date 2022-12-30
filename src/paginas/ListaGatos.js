import React from "react";
import Suscripcion from "../Components/suscripcion";

export default class ListaGatos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gatos: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_SOdoYekDCU0FL1yLkiJPpI47PD4nBsOhdEj6m8QNuOJg9k3tPBhYaiESX2b9r4sn"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          gatos: result,
        });
      });
  }

  render() {
    return (
      <>
        <div className="mt-5"> ---- </div>
        <div className="container mt-5">
          <h2 className="mt-5 mx-auto">LISTA DE GATOS RANDOM</h2>
          <p>generada por https://thecatapi.com/</p>
          {this.state.gatos.map((gato) => (
            <img src={gato.url} height="150px"></img>
          ))}
        </div>
        <Suscripcion />
      </>
    );
  }
}
