import axios from "axios";
import React, { useEffect, useState } from "react";
import "./RandomAdvice.css";

function RandomAdvice() {
  const [advice, setAdvice] = useState("");
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    if (buttonState) {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((response) => {
          setAdvice(response.data.slip.advice);
        })
        .catch((err) => console.error(err));
    }
  }, [buttonState]);

  const getAdvice = () => {
    setButtonState(!buttonState);
  };

  return (
    <div className="random-advice-container">
      <button
        type="button"
        onClick={getAdvice}
        className="random-advice-button"
      >
        Get some human wisdom
      </button>
      {advice ? <q className="random-advice-quote">{advice}</q> : null}
    </div>
  );
}

export default RandomAdvice;
