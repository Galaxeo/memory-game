import { useState } from "react";
import "./App.css";
import Game from "./Game.jsx";
import getPokemon from "./getPokemon.js";

function App() {
  function pickRandomIntegers() {
    const rangeStart = 1;
    const rangeEnd = 1017;
    const numIntegers = 9;

    // Create an array with all integers in the range
    const allIntegers = Array.from(
      { length: rangeEnd - rangeStart + 1 },
      (_, index) => index + rangeStart
    );

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = allIntegers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allIntegers[i], allIntegers[j]] = [allIntegers[j], allIntegers[i]];
    }

    // Return the first numIntegers elements from the shuffled array
    return allIntegers.slice(0, numIntegers);
  }

  const pokeArr = pickRandomIntegers();
  const [started, setStarted] = useState(false);
  const startGame = () => {
    setStarted(true);
  };

  return (
    <>
      {started ? (
        <Game pokeArr={pokeArr} />
      ) : (
        <div>
          <h1>Pokémon Memory Game</h1>
          <h3>Don't click on the same Pokémon twice!</h3>
          <button onClick={startGame}>Play!</button>
        </div>
      )}
      <div></div>
    </>
  );
}

export default App;
