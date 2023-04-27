import React from "react";
import PropTypes from "prop-types";
import "./DishItem.css";

function DishItem({ title, image }) {
  return (
    <div className="dish">
      <h2 className="dish__title">{title}</h2>
      <img src={image} alt={title} className="dish__image" />
    </div>
  );
}
DishItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

DishItem.defaultProps = {
  title: "Untitled Dish",
  image: "",
};

export default DishItem;
