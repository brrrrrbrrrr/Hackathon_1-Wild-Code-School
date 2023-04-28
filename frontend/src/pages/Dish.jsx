import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DishPageItem from "../components/dishPageItem/DishPageItem";
import "./Dish.css";
import RandomAdvice from "../components/randomAdvice/RandomAdvice";

function Dish() {
  const { id } = useParams();
  const [dish, setDish] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setDish(response.data.meals[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="dish-container">
        <RandomAdvice />
        <DishPageItem content={dish} />
      </div>
    </div>
  );
}

export default Dish;
