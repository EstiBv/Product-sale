import React from "react";
import images3 from "./images/Sofa-blanco.png";

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="slide">
          <section aria-label="areas list">
            <ul>
              Collection
              <li>
                Furniture
                <div>
                  <img src={images3} alt="sofa blanco individual" />
                </div>
              </li>
              <li>Lighthing</li>
              <li>Accesories</li>
            </ul>
            <ul>Design</ul>
            <ul>Crafmanship</ul>
            <ul>Ethics</ul>
          </section>
          <footer>
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
