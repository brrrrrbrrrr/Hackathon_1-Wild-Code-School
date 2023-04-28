import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DishPageItem from "../components/dishPageItem/DishPageItem";
import "./Dish.css";

function Dish() {
  const { id } = useParams();
  const [dish, setDish] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.warn(response.data.meals[0]);
        setDish(response.data.meals[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <DishPageItem content={dish} />
    </div>
  );
}

export default Dish;
