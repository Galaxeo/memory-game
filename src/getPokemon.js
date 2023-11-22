const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  localStorage.setItem(id, JSON.stringify(data));
};

export default getPokemon;
