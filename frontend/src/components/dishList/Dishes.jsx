/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Dishes.css";
import axios from "axios";
import DishItem from "../dishes/DishItem";
import { useLanguageData } from "../../contexts/LanguageContext";
import Image from "../image/Image";

function Dishes() {
  const [countryDishes, setCountryDishes] = useState([]);
  const { languageData } = useLanguageData();
  if (languageData) {
    useEffect(() => {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${languageData}`
        )
        .then((response) => {
          setCountryDishes(response.data.meals);
        })
        .catch((err) => console.error(err));
    }, [languageData]);
  }

  return (
    <div className="country-container">
      <Image languageData={languageData} className="image-component" />
      <div className="dish-title-item">
        <h1>Les supers plats locaux ! </h1>

        {countryDishes &&
          countryDishes.map((dish) => (
            <DishItem
              key={dish.idMeal}
              title={dish.strMeal}
              image={dish.strMealThumb}
            />
          ))}
      </div>
    </div>
  );
}

export default Dishes;
