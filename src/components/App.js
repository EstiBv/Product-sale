import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Menu from "./Menu";
import InterfaceSlides from "../components/slides/InterfaceSlides";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main role="main" aria-label="products presentation">
        <Menu />
        <InterfaceSlides />
      </main>
    </React.Fragment>
  );
};

export default App;
