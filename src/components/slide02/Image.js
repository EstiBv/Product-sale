import React from "react";
import images3 from "../images/Sofa-blanco.png";
import "../../stylesheets/SubMenu.scss";

const Image = () => {
  return (
    <div className="SubMenu__image ">
      <img src={images3} alt="sofa blanco individual" className="image " />
    </div>
  );
};
export default Image;
