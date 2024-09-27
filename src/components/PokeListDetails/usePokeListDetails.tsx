import {useState, useEffect} from 'react';
import {fetchPokemonData} from './utils/fetchPokeListDetails';
import {typeColors} from './utils/typeColor';
import type {UsePokeListDetailsProps} from './type';

export const getTypeColor = (type: string): string => {
  return typeColors[type.toLowerCase()] || '#A8A878';
};

export const usePokemonListDetails = (): UsePokeListDetailsProps => {
  const [pokemonData, setPokemonData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  // Fetch inicial para paginación
  useEffect(() => {
    const fetchData = async (isLoadMore: boolean = false) => {
      try {
        if (isLoadMore) {
          setLoadingMore(true);
        } else {
          setLoading(true);
        }
        setError(null);

        setTimeout(async () => {
          const data = await fetchPokemonData(20, offset);
          const newPokemonData = data.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.home.front_default,
            typeColor: getTypeColor(pokemon.types[0].type.name),
          }));

          setPokemonData(prevData => {
            if (isLoadMore) {
              return [...prevData, ...newPokemonData];
            } else {
              return newPokemonData;
            }
          });
          setLoading(false);
          setLoadingMore(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch Pokémon');
        setLoading(false);
        setLoadingMore(false);
      }
    };

    fetchData(offset > 0);
  }, [offset]);

  const loadMorePokemon = () => {
    if (!loading && !loadingMore) {
      // Solo cargar más si no hay término de búsqueda
      setOffset(prevOffset => prevOffset + 20);
    }
  };

  return {
    pokemonData,
    loading,
    error,
    loadMorePokemon,
    loadingMore,
  };
};
