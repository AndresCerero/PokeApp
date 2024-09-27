export const fetchPokemons = async (offset, limit) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }
  return await response.json();
};

export const fetchPokemonDetails = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon details');
  }
  return await response.json();
};
