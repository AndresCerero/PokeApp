// logic/usePokemon.js
import {useState, useEffect} from 'react';
import {fetchPokemonData} from './utils/fetchPokeList';

export const usePokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        setTimeout(async () => {
          const data = await fetchPokemonData();
          setPokemonData(data);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch Pokémon');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {pokemonData, loading, error};
};
