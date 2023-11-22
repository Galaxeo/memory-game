import { useState } from "react";
import "./App.css";
import Front from "./Front.jsx";

function App() {
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const startGame = () => {
    setStarted(true);
  };

  return (
    <>
      {started ? (
        <Front />
      ) : (
        <div>
          <h1>Start the memory game!</h1>
          <button onClick={startGame}>Here</button>
        </div>
      )}
      <div></div>
    </>
  );
}

export default App;
