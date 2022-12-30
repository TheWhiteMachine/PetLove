import React from "react";
import Biennvenida from "../bienvenida";
import Suscripcion from "../Components/suscripcion";

export default class InicioPage extends React.Component {
  render() {
    return (
      <>
        <h2>INICIO</h2>
        <div className="container pt-5">
          <div className="saludo mt-3 mb-3">
            <h2>Hola, amantes de los animales</h2>
          </div>
          <Biennvenida className="mb-3" />
          <img
            className=" mx-auto d-block mb-0"
            src="/img/mascotas.jpg"
            alt="encabezato"
            width="500px"
          ></img>
          <p className="">
            A excepción de quienes no se sienten atraídos por los animales todos
            somos, en principio, buenos candidatos para tener una mascota en
            casa como miembro de la familia. Para serlo, tenemos que elegir la
            mascota adecuada según el entorno familiar, el tamaño del hogar y
            los recursos de los que disponemos.
          </p>
          <p>
            La idea de esta página es saber más sobre los distintos tipos de
            mascotas para poder elegir la mejor para su estilo de vida.
          </p>
          <p>
            Próximamente bridnaremos la posiblidad de adoptar mascotas a través
            de esta página
          </p>
          <Suscripcion/>
        </div>
      </>
    );
  }
}
