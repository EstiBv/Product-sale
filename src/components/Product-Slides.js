import React from "react";
import images1 from "../images/Silla-negra.png";
import images2 from "../images/Mesa-negra.png";

const Slides = () => {
  return (
    <React.Fragment>
      <main role="main" aria-label="products presentation">
        <h5>mater</h5>
        <button type="button" aria-label="close this slide">
          burger
        </button>
        <ul aria-label="content-info">
          <li>
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
            <button>Product Details</button>
          </li>
          <li>
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
          </li>
        </ul>
      </main>
    </React.Fragment>
  );
};
export default Slides;
