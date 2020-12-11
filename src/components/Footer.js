import React from "react";
import "../stylesheets/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
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
  );
};
export default Footer;
