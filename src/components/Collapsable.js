import React from "react";
import images3 from "./images/Sofa-blanco.png";
import "../stylesheets/Collapsable.scss";

const Collapsable = (props) => {
  return (
    <>
      <ul className="js-collapsable"> {props.itemscollapsable}</ul>
      <img
        src={images3}
        alt="sofa blanco individual"
        className="image3-sofaBlanco js-collapsable"
      />
    </>
  );
};
export default Collapsable;
