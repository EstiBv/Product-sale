import React from "react";
import "../stylesheets/Menu.scss";
import Collapsable from "./Collapsable";
import Footer from "./Footer";

const Menu = (props) => {
  // List Menu
  const menuList = ["Collection", "Design", "Crafmanship", "Ethics"];
  const menuListItems = menuList.map((sectionMenu, i) => (
    <li key={i}>{sectionMenu}</li>
  ));

  // Event:Lifting
  const handleClickList = (ev) => {
    const activeCollapsable = ev.currentTarget;
    props.handleClickList(console.log("escucha-hija", activeCollapsable));
  };

  const openList = props.collapsableIsOpen === false ? "" : "js-collapsed";
  console.log(openList);
  return (
    <>
      <div className="menu-container">
        <ul
          aria-label="areas list"
          className="menu-container__list-collapsable"
          onClick={handleClickList}
        >
          {menuListItems}
          <div className={openList}>
            {/* <Collapsable /> */}
            {props.collapsable === !false ? <Collapsable /> : null}
          </div>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
