import React from "react";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header aria-label="header" className="header">
      <h1 className="header__title">mater</h1>
      <button
        type="button"
        aria-label="close this slide"
        className="header__btn"
      >
        burger
      </button>
    </header>
  );
};
export default Header;
