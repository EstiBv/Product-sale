import React from "react";
import Product from "./Product";

const InterfaceSlides = () => {
  return (
    <React.Fragment>
      <main role="main" aria-label="products presentation">
        <h5>mater</h5>
        <button type="button" aria-label="close this slide">
          burger
        </button>
        <button>Product Details</button>
      </main>
      <footer>
        <ul>
          <li>
            <p>01</p>
            <small>Forniture name</small>
          </li>
          <li>
            <p>02</p>
            <small>Forniture name</small>
          </li>
        </ul>
      </footer>
      <Product />
    </React.Fragment>
  );
};
export default InterfaceSlides;
