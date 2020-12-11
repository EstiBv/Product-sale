import React from "react";
import "../stylesheets/Menu.scss";
import Collapsable from "./Collapsable";
import Footer from "./Footer";
// import Collapsable from "./Collapsable";

const Menu = (props) => {
  // Menu List
  const menuList = ["Collection", "Design", "Crafmanship", "Ethics"];
  const menuListItems = menuList.map((sectionMenu, i) => (
    <li key={i}>{sectionMenu}</li>
  ));

  // Menu Collapsable
  const itemsCollapsable = ["Furniture", "Lighthing", "Accesories"];
  const listItemsCollapsable = itemsCollapsable.map((sectionName, i) => (
    <li key={i}>{sectionName}</li>
  ));

  // const renderCollapsable = () => {
  //   return <Collapsable />;
  // };

  // Event:Lifting
  const handleClickList = (ev) => {
    const activeCollapsable = ev.currentTarget.id;
    // props.handleClickList(renderCollapsable());
    props.handleClickList(console.log("escucha-hija", activeCollapsable));
  };

  return (
    <>
      <div className="menu-container">
        <ul
          itemscollapsable={listItemsCollapsable}
          aria-label="areas list"
          className="menu-container__list-collapsable"
          onClick={handleClickList}
        >
          {menuListItems}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
