import React, { useState } from "react";
import "../../stylesheets/Menu.scss";
import Submenu from "../slide02/Submenu";
import Footer from "../slide02/Footer";
import PropTypes from "prop-types";

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
      <section className="menu-container">
        <ul
          aria-label="areas list"
          className="menu-container__list "
          onClick={handleCollapsable}
        >
          <li className="menuList">
            {names[0][0]}
            <div className="menuList__collapsable">
              {collapsableIsOpen ? null : (
                <Submenu
                  types={props.data}
                  // handleSubMenu={handleSubMenu}
                  // state={subMenuIsOpen}
                />
              )}
            </div>
          </li>
          <li className="menuList">{names[0][1]}</li>
          <li className="menuList">{names[0][2]}</li>
          <li className="menuList">{names[0][3]}</li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

Menu.protoTypes = {
  names: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
};

export default Menu;
