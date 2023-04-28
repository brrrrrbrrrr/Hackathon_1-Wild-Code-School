/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Image.css";

function Image({ languageData }) {
  const apiKey = "35850709-ec11b077baee9dcda337f7986";
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${apiKey}&q=${languageData}&image_type=photo&pretty=true&min_width=1280&min_height=720&aspect_ratio=1.7777778`
      )
      .then((res) => {
        setImage(res.data.hits[0].webformatURL);
        setImage2(res.data.hits[1].webformatURL);
      });
  }, []);
  return (
    <div className="img-container">
      <div className="img-title-item">
        <h1>My best pictures :</h1>
      </div>
      <img src={image} className="img" alt="" />
      <img src={image2} className="img" alt="" />
    </div>
  );
}

export default Image;
