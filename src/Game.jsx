import { useEffect, useState } from "react";
import Player from "./Audio.jsx";
import musicFile from "./assets/pokemonleaguenight.mp3";
import Pokemon from "./Pokemon.jsx";
import backgroundVideo from "./assets/backgroundVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import pickRandomIntegers from "./randomArr.js";
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
  const [highScore, setHighScore] = useState(0);
  const [memory, setMemory] = useState([]);
  const [win, setWin] = useState(false);
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
    if (score % 9 == 0 && score != 0) {
      setWin(true);
    }
  }, [score]);
  const changeMemory = (name) => {
    if (memory.includes(name)) {
      setHighScore(score);
      setScore(0);
      setMemory([]);
    } else {
      setMemory([...memory, name]);
      setScore(score + 1);
    }
  };
  const resetGame = () => {
    setMemory([]);
    setWin(false);
    let newArr = pickRandomIntegers();
    setArr(newArr);
  };
  return (
    <>
      <video id="background" src={backgroundVideo} autoPlay loop muted></video>
      {win ? (
        <>
          <h1>You win!</h1>
          <h2>Keep going?</h2>
          <button onClick={resetGame}>{restart}</button>
        </>
      ) : (
        <>
          <div>
            <h1>Memory Game</h1>
            <h2>High Score: {highScore}</h2>
            <h3>Score: {score}</h3>
            <PokemonList arr={arr} changeMemory={changeMemory} />
          </div>
        </>
      )}
      <div className="links">
        <Player url={musicFile} />
        <a href="https://github.com/Galaxeo/memory-game">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </>
  );
}

export default Game;
