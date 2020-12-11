import React from "react";
import Product from "./Product";

const InterfaceSlides = (props) => {
  // Recorrer array data y pasar por props los datos a <Producto>
  // const characteristProducts= props.data.map(())

  return (
    <React.Fragment>
      <button>Product Details</button>
      <Product />
      <div>
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
      </div>
    </React.Fragment>
  );
};
export default InterfaceSlides;
