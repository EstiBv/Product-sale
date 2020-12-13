import React, { useEffect } from "react";
import Data from "./data/Data.json";
import "../stylesheets/App.scss";
import Header from "./Header";
import Menu from "./Menu";
import InterfaceSlides from "../components/slides/InterfaceSlides";
import { Route, Switch } from "react-router";
import { useState } from "react";

const App = () => {
  // State
  // Adjuntar login
  const [data, setData] = useState({});

  // Component Did Mount, añadir Loader
  useEffect(() => {
    setData(Data);
  }, []);

  // render
  const renderProducts = () => {
    const dataForProduct = [];
    const dataFromProducts = Data.map((data) => {
      return data.model.push(dataForProduct);
    });

    console.log(dataFromProducts);
    if (dataFromProducts) {
      return (
        <InterfaceSlides
          products={renderProducts}
          id={dataFromProducts.id}
          name={dataFromProducts.name}
          author={dataFromProducts.author}
          description={dataFromProducts.description}
        />
      );
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main role="main" aria-label="products presentation">
        <Switch>
          <Route exact path="/">
            <Menu data={data} />
          </Route>
          <Route path="/products/:id" component={renderProducts} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
