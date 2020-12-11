import React from "react";
import images3 from "./images/Sofa-blanco.png";
import "../stylesheets/Menu.scss";

const Menu = (props) => {
  // listKeys
  const itemsCollection = ["Furniture", "Lighthing", "Accesories"];
  const listItems = itemsCollection.map((sectionName, i) => (
    <li key={i}>{sectionName}</li>
  ));

  // lifting
  const handleClickList = () => {
    props.handleClickList();
    console.log("hola", listItems.i);
  };

  return (
    <>
      <div className="menu-container">
        <section
          aria-label="areas list"
          className="menu-container__list-collapsable"
        >
          <ul className="menu-container__list" onClick={handleClickList}>
            {" "}
            Collection
            {listItems}
          </ul>
          <img
            src={images3}
            alt="sofa blanco individual"
            className="image3-sofaBlanco"
          />

          {/* <ul className="menu-container__list" onClick={handleClickList}>
            Collection
            <li>
              Furniture
              <div>
               
            </li>
            <li>Lighthing</li>
            <li>Accesories</li>
          </ul> */}
          <ul>Design</ul>
          <ul>Crafmanship</ul>
          <ul>Ethics</ul>
        </section>
        <footer className="menu-container__footer">
          <table>
            <thead>
              <tr>
                <td>About</td>
                <td>Contact</td>
                <td>Dealers</td>
              </tr>
              <tr>
                <td>News</td>
                <td>Care</td>
                <td>Press</td>
              </tr>
            </thead>
          </table>
        </footer>
      </div>
    </>
  );
};

export default Menu;
