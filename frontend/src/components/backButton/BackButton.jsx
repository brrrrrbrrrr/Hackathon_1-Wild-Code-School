// components/BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" onClick={handleGoBack} className="back-button">
      Back
    </button>
  );
}

export default BackButton;
