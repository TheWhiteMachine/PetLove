import React from "react";
import ListaPets from "../Components/listaPets";
import Pet from "../Components/pet";

export default class PetsPage extends React.Component {
  pets = [
    {
      nombre: "gato",
      img: "/img/gatito.webp",
    },
    {
      nombre: "Perro",
      img: "/img/perrito.jpg",
    },
  ];

  render() {
    return (
      <>
        <p>PETS</p>

        <Pet
          nombre="Gato"
          img="/img/gatito.webp"
          caracteristicas="Los gatos son muy cariñosos y tienen un gran carácter, pero también valoramos su independencia, es decir, necesitan menos cuidados que otras mascotas. Los gatos pueden ayudar a las personas a recuperarse más rápido de un trauma emocional, como el fallecimiento de un ser querido."
        />
        <Pet
          nombre="Perro"
          img="/img/perrito.jpg"
          caracteristicas="Cuando estés seguro de disponer del tiempo y del tipo de vida que te permita tener un perro, y después de haberte informado sobre las diferentes razas y personalidades para saber qué perros son las mejores mascotas, será el momento de conocer todos los beneficios de tener un perro."
        />
        <Pet
          nombre="Coballo"
          img="/img/coballo.jpg"
          caracteristicas="También conocidas como conejillos de Indias, las cobayas son los roedores domésticos más grandes y regordetes (aproximadamente 1 kilo los adultos), con orejas redondeadas y hocico chato y en general pelo largo (aunque depende de la raza)."
        />

        <h4>Lista de mascotas</h4>
        <ListaPets pets={this.pets} />
      </>
    );
  }
}
