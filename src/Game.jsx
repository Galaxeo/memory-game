import { useEffect, useState } from "react";
import Player from "./Audio.jsx";
import musicFile from "./assets/pokemonleaguenight.mp3";
import Pokemon from "./Pokemon.jsx";
import backgroundVideo from "./assets/backgroundVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
const restart = <FontAwesomeIcon icon={faRotateRight} />;

function PokemonList({ arr, changeMemory }) {
  return (
    <div className="container">
      {arr.map((pokemon) => {
        return (
          <button
            key={pokemon}
            onClick={() => {
              changeMemory(pokemon);
            }}
          >
            <Pokemon name={pokemon} />
          </button>
        );
      })}
    </div>
  );
}

function Game({ pokeArr }) {
  const [arr, setArr] = useState(pokeArr);
  const [score, setScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  useEffect(() => {
    let shuffledArr = shuffle([...arr]);
    setArr(shuffledArr);
  }, [score]);
  const changeMemory = (name) => {
    if (memory.includes(name)) {
      setScore(0);
      setMemory([]);
    } else {
      setMemory([...memory, name]);
      setScore(score + 1);
    }
  };
  const resetGame = () => {
    setScore(0);
    setMemory([]);
  };
  return (
    <>
      <video id="background" src={backgroundVideo} autoPlay loop muted></video>
      {score == 9 ? (
        <>
          <h1>You win!</h1>
          <h2>Try again?</h2>
          <button onClick={resetGame}>{restart}</button>
        </>
      ) : (
        <>
          <div>
            <h1>Memory Game</h1>
            <h2>Score: {score}</h2>
            <PokemonList arr={arr} changeMemory={changeMemory} />
          </div>
        </>
      )}
      <h2>Music</h2>
      <Player url={musicFile} />
    </>
  );
}

export default Game;
