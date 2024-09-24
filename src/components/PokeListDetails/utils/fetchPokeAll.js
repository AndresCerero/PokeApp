export const fetchPokemonAll = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'); // Usar un límite alto para obtener todos
  const data = await response.json();
  return Promise.all(
    data.results.map(async pokemon => {
      const details = await fetch(pokemon.url);
      return details.json();
    }),
  );
};
