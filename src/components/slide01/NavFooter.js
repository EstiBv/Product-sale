import React from "react";
import "../../stylesheets/NavFooter.scss";
const NavFooter = () => {
  /*const data = props.dataLinks.map((a) => {
  //   return <li key={a.id}>{a.name}</li>;
  // }); OPTAR POR AÑADIR LINK ROUTE*/

  return (
    <nav className="footer-nav">
      <div className="footer-nav__container0">
        <a href="0" className="footer-nav0">
          01
          <small> Shell Dining Chair</small>
        </a>
      </div>
      <div className="footer-nav__container1">
        <a href="1" className="footer-nav1">
          02
          <small> Dunes Anthrazite Black</small>
        </a>
      </div>
    </nav>
  );
};
export default NavFooter;
