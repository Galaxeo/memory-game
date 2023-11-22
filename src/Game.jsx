import { useState } from "react";
import Player from "./Audio.jsx";
import musicFile from "./assets/animalcrossng.mp3";
import Pokemon from "./Pokemon.jsx";
import getPokemon from "./getPokemon.js";
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
pokeArr.forEach(async (pokemon) => {
  await getPokemon(pokemon);
});

function Game() {
  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <Player url={musicFile} />
        {pokeArr.map((pokemon) => {
          return <Pokemon name={pokemon} />;
        })}
      </div>
    </>
  );
}

export default Game;
