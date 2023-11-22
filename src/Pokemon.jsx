import { useEffect, useState } from "react";
import getPokemon from "./getPokemon";
function Pokemon({ name }) {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const changeData = (data) => {
    setData(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPokemon(name);
      changeData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setImage(data.sprites.front_default);
    }
  }, [data]);
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
}
export default Pokemon;
