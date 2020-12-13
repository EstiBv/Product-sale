import React, { useState } from "react";
import "../stylesheets/Menu.scss";
import Submenu from "./Submenu";
import Footer from "./Footer";

const Menu = () => {
  // State
  const [collapsableIsOpen, setCollapsableIsOpen] = useState(true);
  // const openList = collapsableIsOpen ? "js-collapsed" : " ";

  // Event
  const handleCollapsable = () => {
    setCollapsableIsOpen(!collapsableIsOpen);
  };

  // <div className={openList}>{/* <Submenu /> */}</div>
  return (
    <>
      <div className="menu-container">
        <ul
          aria-label="areas list"
          className="menu-container__list-collapsable"
        >
          <div onClick={handleCollapsable}>
            <li className="menuList">
              Collection
              {collapsableIsOpen ? null : <Submenu />}
            </li>
          </div>
          <li className="menuList">Design</li>
          <li className="menuList">Crafmanship</li>
          <li className="menuList">Ethics</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
