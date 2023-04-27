import RandomDish from "./components/randomDish/RandomDish";
import "./App.css";
import Dishes from "./components/dishList/Dishes";

function App() {
  return (
    <div className="App">
      <Dishes />
      <RandomDish />
    </div>
  );
}

export default App;
