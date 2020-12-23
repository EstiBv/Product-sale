import React from "react";
import Data from "./data/Data.json";
import "../stylesheets/App.scss";
import Header from "./Header";
import Menu from "./slide02/Menu";
import Products from "./slide01/Products";
import { Route, Switch } from "react-router";
// import { useState } from "react";

const App = () => {
  // State : Add Loader
  // const [data, setData] = useState({});
  // const [scroll, setScroll] = useState("hidden");

  // Add Loader
  // useEffect(() => {
  //   setData(Data);
  // }, []);

  // event
  // const handleScroll = () => {
  //   setScroll("visible");
  // };

  // render
  const renderProducts = () => {
    const dataFromProducts = Data.map((item) => {
      return item;
    }).map((model) => {
      return model.model;
    });
    if (dataFromProducts) {
      return (
        <Products products={renderProducts} dataProducts={dataFromProducts} />
      );
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main role="main" aria-label="products presentation">
        <Switch>
          <Route exact path="/" component={renderProducts} />
          <Route path="/home/">
            <Menu data={Data} />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
