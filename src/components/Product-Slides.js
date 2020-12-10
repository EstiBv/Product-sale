import React from "react";
import images1 from "../images/Silla-negra.png";
import images2 from "../images/Mesa-negra.png";

const Slides = () => {
  return (
    <React.Fragment>
      <h5>mater</h5>
      <button>burger</button>
      <ul>
        <li>
          <article>
            <small>autor</small>
            <h4>Forniture name</h4>
            <p>
              Lorem fistrum a peich labore a wan. Pecador exercitation ullamco
              velit por la gloria de mi madre veniam incididunt ese que llega
              papaar papaar incididunt pecador.{" "}
            </p>
            <img src={images1} alt="imagen silla negra" />
          </article>
          <button>Product Details</button>
        </li>
        <li>
          <article>
            <small>autor</small>
            <h4>Forniture name</h4>
            <p>
              Lorem fistrum a peich labore a wan. Pecador exercitation ullamco
              velit por la gloria de mi madre veniam incididunt ese que llega
              papaar papaar incididunt pecador.{" "}
            </p>
            <img src={images2} alt="imagen silla negra" />
          </article>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default Slides;
