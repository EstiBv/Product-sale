import React from "react";
import "../../stylesheets/App.scss";
import "../../stylesheets/Product.scss";
const Product = (props) => {
  const eachProduct = props.infoProducts.map((a, i) => {
    return (
      <section
        aria-label=" content-info"
        key={a.id}
        id={i}
        className="container-general"
      >
        <div className="slide container">
          <article
            aria-label="slide__product-description"
            className="container__products"
          >
            <li className="container__data">
              <div className="container__data--text">
                <small className="container__data--text-author">
                  {a.author}
                </small>
                <h4 className="container__data--text-name"> {a.name}</h4>
                <p className="container__data--text-paragraph">
                  {a.description}
                </p>
              </div>
              <div className="container__data--imgProduct">
                <img
                  src={a.img}
                  alt="imagen de producto"
                  className="container__data--img"
                />
              </div>
            </li>
          </article>
        </div>
      </section>
    );
  });
  return <ul className="slide-container">{eachProduct}</ul>;
};
export default Product;
