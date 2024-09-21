import {useState, useEffect} from 'react';
import {fetchPokemonData} from './utils/fetchPokeListDetails';
import {typeColors} from './utils/typeColor';

export const getTypeColor = (type: string): string => {
  return typeColors[type.toLowerCase()] || '#A8A878';
};

export const usePokemon = () => {
  const [pokemonData, setPokemonData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0); // Para manejar la paginación
  const [loadingMore, setLoadingMore] = useState<boolean>(false); // Para detectar si estamos cargando más Pokémon

  useEffect(() => {
    
    const fetchData = async (isLoadMore = false) => {
      try {
        if (isLoadMore) {
          setLoadingMore(true);
        } else {
          setLoading(true);
        }
        setError(null);

        // Simulamos un retardo de 2 segundos
        setTimeout(async () => {
          const data = await fetchPokemonData(10, offset);
          const newPokemonData = data.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            typeColor: getTypeColor(pokemon.types[0].type.name),
          }));

          setPokemonData(prevData =>
            isLoadMore ? [...prevData, ...newPokemonData] : newPokemonData,
          );
          setLoading(false);
          setLoadingMore(false);
        }, 6000);
      } catch (err) {
        setError('Failed to fetch Pokémon');
        setLoading(false);
        setLoadingMore(false);
      }
    };
    fetchData(offset > 0);
  }, [offset]);

  const loadMorePokemon = () => {
    setOffset(prevOffset => prevOffset + 10);
  };

  return {pokemonData, loading, error, loadMorePokemon, loadingMore};
};
