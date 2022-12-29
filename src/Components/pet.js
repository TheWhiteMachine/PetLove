import React from "react";
export default class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      escondido: false,
    };
    this.toggleEesconder = this.toggleEesconder.bind(this);
  }
  toggleEesconder() {
    this.setState((prevState) => ({
      escondido: !prevState.escondido,
    }));
  }
  render() {
    return (
      <>
        <div className="row">
          <div
            className={
              "col-12 d-flex aling-items-center " +
              (this.state.escondido ? "d-none" : "")
            }
          >
            <img
              className="img-thumbnail img-fluid w-5 mx-auto rounded mr-2 "
              src={this.props.img}
              alt={this.props.nombre}
              width="280"
            />

            <div className="pl-5">
              <h2>{this.props.nombre}</h2>
              <p>{this.props.caracteristicas}</p>
              <button className="btn btn-light " onClick={this.toggleEesconder}>
                esconder
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
