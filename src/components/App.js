import React from "react";
import Data from "./data/Data.json";
import "../stylesheets/App.scss";
import Header from "./Header";
import Menu from "./slide02/Menu";
import InterfaceSlides from "./slide01/InterfaceSlides";
import { Route, Switch } from "react-router";
// import { useState } from "react";

const App = () => {
  // State : Add Loader
  // const [data, setData] = useState({});

  // Add Loader
  // useEffect(() => {
  //   setData(Data);
  // }, []);

  // render
  const renderProducts = () => {
    const dataFromProducts = Data.map((item) => {
      return item;
    }).map((model) => {
      return model.model;
    });
    if (dataFromProducts) {
      return (
        <InterfaceSlides
          products={renderProducts}
          dataProducts={dataFromProducts}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main role="main" aria-label="products presentation">
        <Switch>
          <Route path="/products">
            <Menu data={Data} />
          </Route>
          <Route exact path="/" component={renderProducts} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
