/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import { useState } from "react";
import WorldMap from "react-svg-worldmap";
import Country from "../country/Country";
import Data from "./Data";
import "./Map.css";

function formattedNumber(num, digits) {
  if (typeof num === "undefined") return "";
  const magnitudes = [
    { value: 1e9, text: " billion " },
    { value: 1e6, text: " million " },
    { value: 1e3, text: " thousand " },
    { value: 1, text: "" },
  ];

  const magnitude = magnitudes.find((m) => num >= m.value);
  if (magnitude) {
    return (
      (num / magnitude.value)
        .toFixed(digits)
        .replace(/\.0+$|(?<number>\.[0-9]*[1-9])0+$/, "$1") + magnitude.text
    );
  }
  return "";
}
const getStyle = ({
  countryValue,
  countryCode,
  minValue,
  maxValue,
  color,
}) => ({
  fill: countryCode >= "0" && countryCode <= "27" ? "red" : color,
  fillOpacity: countryValue
    ? 1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
    : 0,
  stroke: "black",
  strokeWidth: 1,
  strokeOpacity: 0.5,
  cursor: "pointer",
});

function Map() {
  const [state, setState] = useState({
    cName: "Select Country",
    iso: "",
    val: "",
  });
  console.warn("iso :", state.iso);
  const clickAction = React.useCallback(
    ({ countryName, countryCode, countryValue }) => {
      setState({
        cName: countryName,
        iso: countryCode,
        val: formattedNumber(countryValue, 2),
      });
    },
    []
  );

  return (
    <>
      <WorldMap
        className="worldMap"
        title=""
        data={Data}
        onClickFunction={clickAction}
        styleFunction={getStyle}
        backgroundColor="transparent"
        color="blue"
      />
      <Country country={state.iso} />
    </>
  );
}

export default Map;
