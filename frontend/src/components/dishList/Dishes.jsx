/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Dishes.css";
import axios from "axios";
import DishItem from "../dishes/DishItem";
import { useLanguageData } from "../../contexts/LanguageContext";

function Dishes({ language }) {
  const [countryDishes, setCountryDishes] = useState([]);
  const { languageData } = useLanguageData();
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

  return (
    <div className="dish-title-item">
      <h1>Voici la liste des plats les plus populaires de {language}</h1>

      {countryDishes &&
        countryDishes.map((dish) => (
          <DishItem
            key={dish.idMeal}
            title={dish.strMeal}
            image={dish.strMealThumb}
          />
        ))}
    </div>
  );
}

export default Dishes;
