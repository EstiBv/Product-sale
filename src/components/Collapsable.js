import React from "react";
import images3 from "./images/Sofa-blanco.png";
import "../stylesheets/Collapsable.scss";

const Collapsable = () => {
  // Collapsable Menu
  const itemsCollapsable = ["Furniture", "Lighthing", "Accesories"];
  const listItemsCollapsable = itemsCollapsable.map((sectionName, i) => (
    <li key={i}>{sectionName}</li>
  ));
  return (
    <>
      <ul> {listItemsCollapsable}</ul>
      <img
        src={images3}
        alt="sofa blanco individual"
        className="image3-sofaBlanco"
      />
    </>
  );
};
export default Collapsable;
