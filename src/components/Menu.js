import React from "react";
import images3 from "./images/Sofa-blanco.png";
import "../stylesheets/Menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menu-container">
          <section
            aria-label="areas list"
            className="menu-container__list-collapsable"
          >
            <ul className="menu-container__list">
              Collection
              <li>
                Furniture
                <div>
                  <img
                    src={images3}
                    alt="sofa blanco individual"
                    className="image3-sofaBlanco"
                  />
                </div>
              </li>
              <li>Lighthing</li>
              <li>Accesories</li>
            </ul>
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
  }
}

export default Menu;
