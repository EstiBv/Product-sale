import React from "react";
import "../../stylesheets/App.scss";

const Product = (props) => {
  const eachProduct = props.infoProducts.map((a, i) => {
    return (
      <section
        aria-label="content-info"
        className="slide-container"
        key={a.id}
        id={i}
      >
        <div className="slide">
          <article aria-label="slide__product-description" className="slide">
            <li>
              <small>{a.author}</small>
              <h4>{a.name}</h4>
              <p className="paragraph">{a.description}</p>
              <img src={a.img} alt="imagen de producto" />
            </li>
          </article>
        </div>
      </section>
    );
  });
  return <ul>{eachProduct}</ul>;
};
export default Product;