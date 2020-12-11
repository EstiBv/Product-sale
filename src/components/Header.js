import React from "react";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header aria-label="header" className="header">
      <nav className="header__nav-container">
        <h1 className="header__title">mater</h1>
        <button
          type="button"
          aria-label="close this slide"
          className="header__btn"
        >
          burger
        </button>
      </nav>
    </header>
  );
};
export default Header;
