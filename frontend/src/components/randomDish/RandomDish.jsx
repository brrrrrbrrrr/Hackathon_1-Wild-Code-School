import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomDish.css";
import Test from "../../pages/Test";

function RandomDish() {
  const [randomDish, setRandomDish] = useState(null);
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
    setRandomDish(null);
  };

  useEffect(() => {
    if (!button) return;

    const corsProxy = "https://api.allorigins.win/raw?url=";
    const apiUrl =
      "https://evilinsult.com/generate_insult.php?lang=en&type=text";
    axios
      .get(corsProxy + apiUrl)
      .then((response) => setRandomInsult(response.data))
      .catch((err) => console.error(err));
  }, [button]);

  return (
    <div className="randomDish-global-container">
      <div className="buttons-title-container">
        <h2 className="buttons-title">
          Offer a random <span className="span-bold"> trip </span> to your taste
          buds ?
        </h2>
        <div className="buttons-container">
          <button
            type="button"
            className="button-random"
            onClick={getRandomDish}
          >
            Yes
          </button>
          <button
            type="button"
            className="button-random"
            onClick={() => {
              getRandomInsult();
              setRandomInsult("");
            }}
          >
            No
          </button>
        </div>
      </div>
      <div className="random-insult">
        {randomInsult && <p className="random-insult-p">{randomInsult}</p>}
      </div>
      <div className="random-item">
        {randomDish && (
          <div className="random-dish">
            <div className="random-item-half random-dish-title-image-container">
              <h2 className="random-dish__title">{randomDish.strMeal}</h2>
              {randomDish.strMealThumb && (
                <img
                  src={randomDish.strMealThumb}
                  alt={randomDish.strMeal}
                  className="random-dish__image"
                />
              )}
            </div>
            <div className="random-item-half random-item-half2">
              <p className="random-dish__area">Origin: {randomDish.strArea}</p>
              <p className="random-dish__instructions">
                Recipe : <br />
                <br />
                {randomDish.strInstructions}
              </p>
            </div>
          </div>
        )}
      </div>
      <Test />
    </div>
  );
}
export default RandomDish;
