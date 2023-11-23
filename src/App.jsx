import { useState } from "react";
import "./App.css";
import Game from "./Game.jsx";
import getPokemon from "./getPokemon.js";

function App() {
  const pokeArr = [
    "darkrai",
    "mew",
    "arceus",
    "pikachu",
    "jirachi",
    "victini",
    "quagsire",
    "charmander",
    "chimchar",
  ];
  if (localStorage.getItem("darkrai") === null) {
    pokeArr.forEach(async (pokemon) => {
      await getPokemon(pokemon);
    });
  }
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
          <button onClick={startGame}>Play!</button>
        </div>
      )}
      <div></div>
    </>
  );
}

export default App;
