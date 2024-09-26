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

    const filterResult = result.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const updatedResult = [...finalResult, ...filterResult];

    if (updatedResult.length >= 10) return updatedResult;

    if (offset + limit < 1301) {

      return await searchByName(
        offset + limit,
        limit,
        searchTerm,
        updatedResult,
      );
    }

    return updatedResult;
  };

  return {searchByName};
}
