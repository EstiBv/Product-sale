import React from "react";
import images3 from "../images/Sofa-blanco.png";
import "../../stylesheets/SubMenu.scss";

const Submenu = (props) => {
  /*
handleClick y ternario para pintar componente Imagen.https://medium.com/@teffcode/c%C3%B3mo-hacer-animaciones-con-scroll-usando-react-js-a157755b2a1 
*/

  const types = props.types.map((b) => {
    return b.type;
  });

  const imgSubMenuIsOpen = { images3 } ? "hidden" : " hidden";

  return (
    <>
      <ul className="subMenu">
        <li className="subMenu__item">
          {types[0][0]}
          <div className={"SubMenu__image " + imgSubMenuIsOpen}>
            <img
              src={images3}
              alt="sofa blanco individual"
              className="image "
            />
          </div>
        </li>
        <li className="subMenu__item">{types[0][1]}</li>
        <li className="subMenu__item">{types[0][2]}</li>
      </ul>
    </>
  );
};
export default Submenu;
