export default function useSearchPokemon() {
  const searchByName = async (offset, limit, searchTerm, finalResult = []) => {
    // Fetch Pokémon data
    const rawResult = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    );
    if (!rawResult.ok) {
      throw new Error('Failed to fetch Pokémon');
    }

    const fetchResult = await rawResult.json();
    const result = fetchResult.results;

    // Filter Pokémon by name
    const filterResult = result.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Update final result
    const updatedResult = [...finalResult, ...filterResult];

    // Stop condition (example: after fetching 1301 Pokémon or 10 results found)
    if (updatedResult.length >= 10) return updatedResult;

    // Recursive call with incremented offset
    if (offset + limit < 1301) {
      // Limitar la búsqueda a 1301 Pokémon
      return await searchByName(
        offset + limit,
        limit,
        searchTerm,
        updatedResult,
      );
    }

    return updatedResult; // Devuelve los resultados encontrados
  };

  return {searchByName};
}
