// /utils/fetch.js
export const fetchPokemonDetails = async id => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonDetails  = await response.json();
    return pokemonDetails;
  } catch (error) {
    throw new Error('Error fetching Pokémon data');
  }
};
