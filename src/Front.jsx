import { useState } from "react";
import "./App.css";
import Player from "./Audio.jsx";
import musicFile from "./assets/animalcrossng.mp3";

function Front() {
  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <Player url={musicFile} />
      </div>
    </>
  );
}

export default Front;
