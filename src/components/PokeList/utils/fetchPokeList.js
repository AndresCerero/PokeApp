// utils/api.js
export const fetchPokemonData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }
  const data = await response.json();
  return data.results;
};
