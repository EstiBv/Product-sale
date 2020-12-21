import React from "react";
import images3 from "../images/Sofa-blanco.png";
import "../../stylesheets/SubMenu.scss";

const Submenu = (props) => {
  const types = props.types.map((b) => {
    return b.type;
  });

  const imgSubMenuIsOpen = { images3 } ? "" : " subMenu__img";
  console.log(imgSubMenuIsOpen);
  return (
    <>
      <ul>
        <li className="subMenu">
          {types[0][0]}
          <div className={imgSubMenuIsOpen}>
            <img
              src={images3}
              alt="sofa blanco individual"
              className={"image3-sofaBlanco"}
            />
          </div>
        </li>
        <li className="subMenu">{types[0][1]}</li>
        <li className="subMenu">{types[0][2]}</li>
      </ul>
    </>
  );
};
export default Submenu;
