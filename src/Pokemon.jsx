import { useEffect, useState } from "react";
import getPokemon from "./getPokemon.js";
function Pokemon({ name }) {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const changeData = (data) => {
    setData(data);
  };
  useEffect(() => {
    let interval = "";
    if (isLoading) {
      interval = setInterval(() => {
        changeData(JSON.parse(localStorage.getItem(name)));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);
  useEffect(() => {
    getPokemon(name);
    changeData(JSON.parse(localStorage.getItem(name)));
  }, []);

  useEffect(() => {
    if (data) {
      setImage(data);
      setIsLoading(false);
    }
  }, [data]);
  return (
    <div>
      <img className="pokeImg" src={image} alt="" />
    </div>
  );
}
export default Pokemon;
