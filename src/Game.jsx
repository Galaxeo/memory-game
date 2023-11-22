import { useState } from "react";
import Player from "./Audio.jsx";
import musicFile from "./assets/animalcrossng.mp3";
import Pokemon from "./Pokemon.jsx";

function Game() {
  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <Player url={musicFile} />
        <Pokemon name="mew" />
        <Pokemon name="pikachu" />
        <Pokemon name="pichu" />
      </div>
    </>
  );
}

export default Game;
