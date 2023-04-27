/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from "react";

const languageContext = createContext(null);

function LanguageProvider({ children }) {
  const [languageData, setLanguageData] = useState(null);

  return (
    <languageContext.Provider value={{ languageData, setLanguageData }}>
      {children}
    </languageContext.Provider>
  );
}
export const useLanguageData = () => useContext(languageContext);

export default LanguageProvider;
