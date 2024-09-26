// /utils/fetch.js
export const fetchPokemonData = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async pokemon => {
        const response = await fetch(pokemon.url);
        const details = await response.json();
        return details;
      }),
    );

    return pokemonDetails;
  } catch (error) {
    throw new Error('Error fetching Pokémon data');
  }
};
