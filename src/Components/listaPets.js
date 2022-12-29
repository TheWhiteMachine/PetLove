import React from "react";
import Pet from "./pet";

export default class ListaPets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.pets.map((pet) => (
          <Pet nombre={pet.nombre} img={pet.img} />
        ))}
      </>
    );
  }
}
