import React from "react";
import Product from "./Product";
import NavFooter from "./NavFooter";
import "../../stylesheets/App.scss";

const InterfaceSlides = (props) => {
  const contentInfoProfucts = props.dataProducts.map((infoProducts, i) => {
    return (
      <li key={i}>
        <Product infoProducts={infoProducts} />
      </li>
    );
  });

  return (
    <React.Fragment>
      <input type="button" value="Product Detail" className="btn-detail" />
      <div className="slides">
        <ul aria-label="content-info" className="slide-container">
          {contentInfoProfucts}
        </ul>
      </div>
      <NavFooter dataLinks={props.dataProducts} />
    </React.Fragment>
  );
};
export default InterfaceSlides;
