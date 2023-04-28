/* eslint-disable react/prop-types */
import React from "react";
import "./DishPageItem.css";
import Test from "../../pages/Test";

function DishPageItem({ content }) {
  const getYoutubeEmbedUrl = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return null;
  };

  const embedUrl = content.strYoutube
    ? getYoutubeEmbedUrl(content.strYoutube)
    : null;

  return (
    <div className="dish-page-container">
      <Test />
      <h2 className="dish-page-title">{content.strMeal}</h2>
      <p className="dish-page-location">
        <span className="dish-page-span"> Type </span> :{content.strArea}
      </p>
      <p className="dish-page-instructions">
        <span className="dish-page-span"> Recipe </span>:
        {content.strInstructions}
      </p>
      <div className="dish-page-media-container">
        <img
          src={content.strMealThumb}
          alt={content.strMeal}
          className="dish-page-image"
        />
        {content.strYoutube ? (
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="550"
            height="350"
            src={embedUrl}
            className="dish-page-video"
            loading="lazy"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DishPageItem;
