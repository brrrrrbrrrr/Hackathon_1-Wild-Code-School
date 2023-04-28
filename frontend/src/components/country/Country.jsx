/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useLanguageData } from "../../contexts/LanguageContext";

function Country({ country }) {
  const navigate = useNavigate();
  const { setLanguageData } = useLanguageData();

  if (country !== undefined && country !== null) {
    useEffect(() => {
      axios
        .get(`https://restcountries.com/v3.1/alpha/${country}`)
        .then((res) => {
          // setLanguage(Object.values(res.data[0].languages)[0]);
          setLanguageData(res.data[0].demonyms.eng.m);
          navigate("/country");
        })
        .catch((error) => {
          console.warn(error);
        });
    }, [country]);
  }

  return (
    <div>
      <Link to="/randomDish" style={{ color: "#FFF" }}>
        {" "}
        Random country
      </Link>
    </div>
  );
}

export default Country;
