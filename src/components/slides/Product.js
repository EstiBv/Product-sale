import React from "react";
import images1 from "../images/Silla-negra.png";
import images2 from "../images/Mesa-negra.png";

const Product = () => {
  return (
    <section aria-label="content-info" className="slide-container">
      <div className="slide">
        <article aria-label="product general description">
          <small>autor</small>
          <h4>Forniture name</h4>
          <p>
            Lorem fistrum a peich labore a wan. Pecador exercitation ullamco
            velit por la gloria de mi madre veniam incididunt ese que llega
            papaar papaar incididunt pecador.{" "}
          </p>
          <img src={images1} alt="black wooden chair" />
        </article>
      </div>
      <div className="slide">
        <article aria-label="product general description">
          <small>autor</small>
          <h4>Forniture name</h4>
          <p>
            Lorem fistrum a peich labore a wan. Pecador exercitation ullamco
            velit por la gloria de mi madre veniam incididunt ese que llega
            papaar papaar incididunt pecador.{" "}
          </p>
          <img src={images2} alt="black wooden table" />
        </article>
      </div>
    </section>
  );
};
export default Product;
