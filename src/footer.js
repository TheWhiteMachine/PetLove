import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="row position-absolute botom-0 mt-5 bg-light py-2 px-4 w-100 align-items-center jsutify-itmes-center">
        <div className="col-12  d-flex align-items-cemter ">
          <span className="mx-3">Facebook</span>
          <span className="mx-3">Insta</span>
          <spam className="mx-3">Mail</spam>
        </div>
      </div>
    );
  }
}
