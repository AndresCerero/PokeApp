// /utils/fetch.js
export const fetchPokemonData = async (limit = 10, offset = 0) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    // Mapea la lista inicial y para cada Pokémon realiza una petición adicional a su URL
    const pokemonDetails = await Promise.all(
      data.results.map(async pokemon => {
        const response = await fetch(pokemon.url); // Llama a la URL específica de cada Pokémon
        const details = await response.json();
        return details; // Devuelve los detalles del Pokémon
      }),
    );

    return pokemonDetails; // Devuelve los detalles de todos los Pokémon
  } catch (error) {
    throw new Error('Error fetching Pokémon data');
  }
};
