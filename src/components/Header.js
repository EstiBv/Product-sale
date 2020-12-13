import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header aria-label="header" className="header">
      <nav className="header__nav-container">
        <Link to="/">
          <h1 className="header__title">mater</h1>
        </Link>
        <Link to="/products/:id">
          <button
            type="button"
            aria-label="close this slide"
            className="header__btn"
          >
            burger
          </button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
