import {useState, useEffect} from 'react';
import {fetchPokemons, fetchPokemonDetails} from './utils/fetchSearchPoke';
import {typeColors} from '../PokeListDetails/utils/typeColor';

export const getTypeColor = (type: string): string => {
  return typeColors[type.toLowerCase()] || '#A8A878';
};

export default function useSearchPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const searchByName = async (
    offset = 0,
    limit = 20,
    collectedResults = [],
  ) => {
    setLoading(true);
    try {
      const fetchResult = await fetchPokemons(offset, limit);
      const result = fetchResult.results;

      const filteredPokemons = result.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      const updatedResults = [...collectedResults, ...filteredPokemons];

      if (updatedResults.length >= 10) {
        const firstTenResults = updatedResults;

        const detailsPromises = firstTenResults.map(pokemon =>
          fetchPokemonDetails(pokemon.url),
        );
        const detailedPokemons = await Promise.all(detailsPromises);

        const formattedPokemons = detailedPokemons.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.home.front_default,
          typeColor: getTypeColor(pokemon.types[0].type.name),
        }));

        setPokemonList(formattedPokemons);
        setLoading(false);
        return;
      }

      if (offset + limit < 1301) {
        await searchByName(offset + limit, limit, updatedResults);
      } else {
        const detailsPromises = updatedResults.map(pokemon =>
          fetchPokemonDetails(pokemon.url),
        );
        const detailedPokemons = await Promise.all(detailsPromises);
        setPokemonList(detailedPokemons);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchByName();
    } else {
      setPokemonList([]);
    }
  }, [searchTerm]);

  return {pokemonList, loading, setSearchTerm, searchTerm};
}
