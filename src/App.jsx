import { useState } from "react";
import "./App.css";
import Game from "./Game.jsx";

function App() {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const startGame = () => {
    setStarted(true);
  };

  return (
    <>
      {started ? (
        <Game />
      ) : (
        <div>
          <h1>Start the memory game!</h1>
          <button onClick={startGame}>Play!</button>
        </div>
      )}
      <div></div>
    </>
  );
}

export default App;
