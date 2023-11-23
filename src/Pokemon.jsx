import { useEffect, useState } from "react";
function Pokemon({ name }) {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const changeData = (data) => {
    setData(data);
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem(name));
    changeData(data);
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
