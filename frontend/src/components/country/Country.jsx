/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dishes from "../dishList/Dishes";
import { useLanguageData } from "../../contexts/LanguageContext";

function Country({ country }) {
  const { setLanguageData } = useLanguageData();
  const [language, setLanguage] = useState();
  if (country !== undefined && country !== null) {
    useEffect(() => {
      axios
        .get(`https://restcountries.com/v3.1/alpha/${country}`)
        .then((res) => {
          // setLanguage(Object.values(res.data[0].languages)[0]);
          setLanguage(res.data[0].demonyms.eng.m);
          setLanguageData(language);
        })
        .catch((error) => {
          console.warn(error);
        });
    }, [country]);
  }

  console.warn("country : ", language);
  return (
    <div>
      <p>{country}</p>
      {language ? (
        <Dishes language={language} />
      ) : (
        <Link to="/randomDish"> Découvrir un pays au hasard ? </Link>
      )}
    </div>
  );
}

export default Country;
