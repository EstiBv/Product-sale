import React from "react";
import "../stylesheets/App.css";
import FooterSlides from "./FooterProductSlides";
import Slides from "./ProductSlides";

const App = () => {
  return (
    <React.Fragment>
      <Slides />
      <FooterSlides />
    </React.Fragment>
  );
};

export default App;
