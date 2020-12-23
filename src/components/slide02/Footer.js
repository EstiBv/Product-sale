import React from "react";
import "../../stylesheets/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <table>
        <thead className="footer__thead">
          <tr className="footer__tr">
            <td className="footer__td">About</td>
            <td className="footer__td">Contact</td>
            <td className="footer__td">Dealers</td>
          </tr>
          <tr className="footer__tr">
            <td className="footer__td">News</td>
            <td className="footer__td">Care</td>
            <td className="footer__td">Press</td>
          </tr>
        </thead>
      </table>
    </footer>
  );
};
export default Footer;
