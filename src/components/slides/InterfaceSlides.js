import React from "react";
import Product from "./Product";
import "../../stylesheets/App.scss";

const InterfaceSlides = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <button>Product Details</button>
      <section aria-label="content-info" className="slide-container">
        <Product />
      </section>
      <nav>
        <a href="#1">
          01
          <small>Forniture name</small>
        </a>
        <a href="#2">
          02
          <small>Forniture name</small>
        </a>
      </nav>
    </React.Fragment>
  );
};
export default InterfaceSlides;
