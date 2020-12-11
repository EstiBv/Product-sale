import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Menu from "./Menu";
import InterfaceSlides from "../components/slides/InterfaceSlides";
import { Route, Switch } from "react-router";
import { useState } from "react";

const App = () => {
  // State
  const [collapsable, setCollapsable] = useState([]);

  // Event
  const handleClickList = (clicked) => {
    // debugger;
    if (clicked) {
      setCollapsable();
    } else {
      console.log("no pinto");
    }
    console.log("pinto");
  };

  // render
  const renderProducts = () => {
    return <InterfaceSlides />;
  };

  return (
    <React.Fragment>
      <Header />
      <main role="main" aria-label="products presentation">
        <Switch>
          <Route exact path="/">
            <Menu handleClickList={handleClickList} />
          </Route>
          <Route path="/products/" component={renderProducts} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
