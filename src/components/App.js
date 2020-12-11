import React from "react";
import Data from "./data/Data.json";
import "../stylesheets/App.scss";
import Header from "./Header";
import Menu from "./Menu";
import InterfaceSlides from "../components/slides/InterfaceSlides";
import { Route, Switch } from "react-router";
import { useState } from "react";

const App = () => {
  // State Collapsable
  const [data, setData] = useState({});
  const [collapsableIsOpen, setCollapsableIsOpen] = useState(false);

  // Event
  const handleClickList = (clicked) => {
    if (clicked) {
      setCollapsableIsOpen(true);
    } else {
      setCollapsableIsOpen(false);
    }
    console.log("no pinto");
    console.log({ Data });
  };

  // render
  const renderProducts = () => {
    return <InterfaceSlides data={Data} />;
  };

  return (
    <React.Fragment>
      <Header />
      <main role="main" aria-label="products presentation">
        <Switch>
          <Route exact path="/">
            <Menu
              handleClickList={handleClickList}
              collapsable={collapsableIsOpen}
              data={Data}
            />
          </Route>
          <Route path="/products/" component={renderProducts} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
