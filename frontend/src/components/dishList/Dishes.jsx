import React, { useEffect, useState } from "react";
import "./Dishes.css";
import axios from "axios";
import DishItem from "../dishes/DishItem";

function Dishes() {
  const [countryDishes, setCountryDishes] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`
      )
      .then((response) => {
        setCountryDishes(response.data.meals);
      })
      .catch((err) => console.error(err));
  }, [countryName]);

  const handleInput = (e) => {
    setCountryName(e.target.value);
  };

  return (
    <div className="dish-title-item">
      <div className="input-container">
        <label htmlFor="countrySelection">Choisis un pays :</label>
        <input
          className="input"
          type="text"
          id="countrySelection"
          placeholder="Entre un nom de pays"
          onChange={handleInput}
        />
      </div>
      <h1>Voici la liste des plats les plus populaires de ce {countryName}</h1>

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
