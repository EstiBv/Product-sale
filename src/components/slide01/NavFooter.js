import React from "react";
const NavFooter = () => {
  /*const data = props.dataLinks.map((a) => {
  //   return <li key={a.id}>{a.name}</li>;
  // }); OPTAR POR AÑADIR LINK ROUTE*/

  return (
    <nav className="footer-nav">
      <a href="0">
        01
        <small>Shell Dining Chair</small>
      </a>
      <a href="1">
        02
        <small>Dunes Anthrazite Black</small>
      </a>
    </nav>
  );
};
export default NavFooter;
