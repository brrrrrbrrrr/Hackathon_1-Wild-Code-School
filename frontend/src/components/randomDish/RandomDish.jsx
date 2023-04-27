import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomDish.css";

function RandomDish() {
  const [randomDish, setRandomDish] = useState([]);
  const [randomInsult, setRandomInsult] = useState("");
  const [button, setButton] = useState(false);

  const getRandomDish = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setRandomDish(response.data.meals[0]);
        setRandomInsult("");
      })
      .catch((err) => console.error(err));
  };

  const getRandomInsult = () => {
    setButton(!button);
    setRandomDish("");
  };

  useEffect(() => {
    const corsProxy = "https://api.allorigins.win/raw?url=";
    const apiUrl =
      "https://evilinsult.com/generate_insult.php?lang=en&type=text";
    axios
      .get(corsProxy + apiUrl)
      .then((response) => setRandomInsult(response.data))
      .catch((err) => console.error(err));
    console.warn(randomInsult);
  }, [button]);

  return (
    <div>
      <div className="buttons-title-container">
        <h2 className="buttons-title">
          Faire <span className="span-bold"> voyager </span> vos papilles au
          hasard ?
        </h2>
        <div className="buttons-container">
          <button
            type="button"
            className="button-random"
            onClick={getRandomDish}
          >
            Oui
          </button>
          <button
            type="button"
            className="button-random"
            onClick={getRandomInsult}
          >
            Non
          </button>
        </div>
      </div>
      <div className="random-insult">
        {randomInsult ? <p className="random-insult-p">{randomInsult}</p> : ""}
      </div>
      <div className="random-item">
        {randomDish ? (
          <div className="random-dish">
            <div className="random-item-half random-dish-title-image-container">
              <h2 className="random-dish__title">{randomDish.strMeal}</h2>
              <img
                src={randomDish.strMealThumb}
                alt={randomDish.strMeal}
                className="random-dish__image"
              />
            </div>
            <div className="random-item-half random-item-half2">
              <p className="random-dish__area">Origin: {randomDish.strArea}</p>
              <p className="random-dish__instructions">
                Recettes: <br />
                <br />
                {randomDish.strInstructions}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default RandomDish;
