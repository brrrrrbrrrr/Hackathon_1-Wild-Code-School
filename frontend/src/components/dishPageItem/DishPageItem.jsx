/* eslint-disable react/prop-types */
import React from "react";

function DishPageItem({ content }) {
  return (
    <div>
      <h2>{content.strMeal}</h2>
      <p>{content.strArea}</p>
      <p>{content.strInstructions}</p>
      <img src={content.strMealThumb} alt={content.strMeal} />
      {content.strYoutube ? (
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          src={content.strYoutube}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default DishPageItem;
