import { Routes, Route } from "react-router-dom";

import "./App.css";
import RandomDish from "./components/randomDish/RandomDish";
import Map from "./components/map/Map";
import Home from "./pages/Home";
import LanguageProvider from "./contexts/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/randomDish" element={<RandomDish />} />
          {/* <Route path="/" element={} />
        <Route path="/" element={} /> */}
        </Routes>
        {/* <RandomDish />
      <Map /> */}
      </LanguageProvider>
    </div>
  );
}

export default App;
