import React, { useEffect, useState } from "react";
import "./Dishes.css";
import axios from "axios";
import DishItem from "./DishItem";

function Dishes() {
  const [countryDishes, setCountryDishes] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => {
        setCountryDishes(response.data.meals);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="dish-title-item">
      <h1>Voici la liste des plats les plus populaires de ce $nompays</h1>
      {countryDishes.map((dish) => (
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
