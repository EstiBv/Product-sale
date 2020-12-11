import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Menu from "./Menu";
import InterfaceSlides from "../components/slides/InterfaceSlides";

const App = () => {
  const handleClickList = () => {
    console.log("hey");
  };
  return (
    <React.Fragment>
      <Header />
      <main role="main" aria-label="products presentation">
        <Menu handleClickList={handleClickList} />
        <InterfaceSlides />
      </main>
    </React.Fragment>
  );
};

export default App;
