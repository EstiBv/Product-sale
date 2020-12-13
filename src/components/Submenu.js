import React, { useState } from "react";
import images3 from "./images/Sofa-blanco.png";
import "../stylesheets/SubMenu.scss";

const Submenu = (props) => {
  // Collapsable Menu
  // const itemsCollapsable = ["Furniture", "Lighthing", "Accesories"];
  // const listItemsCollapsable = itemsCollapsable.map((sectionName, i) => (
  //   <li key={i} className="subMenu">
  //     {sectionName}
  //   </li>
  // ));

  const [submenuIsOpen, setSubmenuIsOpen] = useState(true);
  const handleClose = () => {
    setSubmenuIsOpen(!submenuIsOpen);
  };

  const imgSubMenuIsOpen = submenuIsOpen ? "js-collapsed" : "";

  return (
    <>
      <ul>
        <li onClick={handleClose} className="subMenu">
          Furniture
          <div className={imgSubMenuIsOpen}>
            {submenuIsOpen ? (
              <img
                src={images3}
                alt="sofa blanco individual"
                className={" image3-sofaBlanco"}
              />
            ) : null}
          </div>
        </li>
        <li className="subMenu">Lighthing</li>
        <li className="subMenu">Accesories</li>
      </ul>
    </>
  );
};
export default Submenu;
