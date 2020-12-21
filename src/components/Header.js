import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <header aria-label="header" className="header">
      <nav className="header__nav">
        <Link to="/" className="header__nav--mater">
          <h1 className="header__title">Mater</h1>
        </Link>
        <Link to="/products/" className="header__nav--burguer">
          <button
            type="button"
            aria-label="close this slide"
            className="header__nav--burguer-btn"
          >
            <div id="burguer" className="burguer">
              <span className="div1"></span>
              <span className="div2"></span>
            </div>
            Burger
          </button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
