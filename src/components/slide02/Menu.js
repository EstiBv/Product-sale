import React, { useState } from "react";
import "../../stylesheets/Menu.scss";
import Submenu from "../slide02/Submenu";
import Footer from "../slide02/Footer";

const Menu = (props) => {
  const names = props.data.map((b) => {
    return b.names;
  });

  // State
  const [collapsableIsOpen, setCollapsableIsOpen] = useState(true);
  // const [subMenuIsOpen, setSubMenuIsOpen] = useState(true);
  // const openList = collapsableIsOpen ? "js-collapsed" : " ";

  // Event
  const handleCollapsable = () => {
    setCollapsableIsOpen(!collapsableIsOpen);
  };
  // const handleSubMenu = () => {
  //   console.log("hola");
  //   setSubMenuIsOpen(!subMenuIsOpen);
  // };

  // <div className={openList}>{/* <Submenu /> */}</div>
  return (
    <>
      <div className="menu-container">
        <ul
          aria-label="areas list"
          className="menu-container__list-collapsable menuList"
          onClick={handleCollapsable}
        >
          <div>
            <li className="menuList">
              {names[0][0]}
              {collapsableIsOpen ? null : (
                <Submenu
                  types={props.data}
                  // handleSubMenu={handleSubMenu}
                  // state={subMenuIsOpen}
                />
              )}
            </li>
          </div>
          <li className="menuList">{names[0][1]}</li>
          <li className="menuList">{names[0][2]}</li>
          <li className="menuList">{names[0][3]}</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
