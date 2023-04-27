/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Dishes.css";
import axios from "axios";
import DishItem from "../dishes/DishItem";

function Dishes({ language }) {
  const [countryDishes, setCountryDishes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${language}`)
      .then((response) => {
        setCountryDishes(response.data.meals);
      })
      .catch((err) => console.error(err));
  }, [language]);

  return (
    <div className="dish-title-item">
      <h1>Voici la liste des plats les plus populaires de ce {language}</h1>

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
