/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Dishes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import DishItem from "../dishes/DishItem";
import { useLanguageData } from "../../contexts/LanguageContext";
import Test from "../../pages/Test";

function Dishes({ language }) {
  const [countryDishes, setCountryDishes] = useState([]);
  // const [id, setId] = useState("");
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
      <Test />
      <h1>Voici la liste des plats les plus populaires de {language}</h1>

      {countryDishes &&
        countryDishes.map((dish) => (
          <Link to={`/dish/${dish.idMeal}`}>
            <DishItem
              key={dish.idMeal}
              title={dish.strMeal}
              image={dish.strMealThumb}
            />
          </Link>
        ))}
    </div>
  );
}

export default Dishes;
