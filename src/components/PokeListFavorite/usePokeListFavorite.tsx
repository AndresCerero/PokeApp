import {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getItems} from '../PokeDetails/utils/fetchAddfavorite';
import {fetchPokemonDetails} from '../PokeDetails/utils/fetchPokeDetails';
import {typeColors} from '../../components/PokeListDetails/utils/typeColor';
import useAuth from '../../hooks/useAuth';

export const getTypeColor = (type: string): string => {
  return typeColors[type.toLowerCase()] || '#A8A878';
};

const usePokemonListFavorite = () => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {auth} = useAuth();
  const [items, setItems] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchItems = async () => {
        const fetchedItems = await getItems();
        setItems(fetchedItems); // Actualiza el estado con los items obtenidos
      };

      fetchItems(); // Llama la función al montar el componente
    }, []),
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        setTimeout(async () => {
          const newPokemonData = [];
          for (const item of items) {
            const data = await fetchPokemonDetails(item); // Usa el id de cada item
            const pokemonDetails = {
              id: data.id,
              name: data.name,
              image: data.sprites.other.home.front_default,
              typeColor: getTypeColor(data.types[0].type.name),
            };

            console.log('Fetched Pokémon data:', pokemonDetails); // Verifica los datos obtenidos de la API
            newPokemonData.push(pokemonDetails);
          }

          setPokemonData(newPokemonData);

          setLoading(false);
        }, 100);
      } catch (err) {
        console.error('Failed to fetch Pokémon:', err);
        setError('Failed to fetch Pokémon');
        setLoading(false);
      }
    };

    if (items.length > 0) {
      fetchData(); // Solo llama a la función si hay items
    } else {
      setLoading(false); // Si no hay items, se puede finalizar la carga
    }
  }, [items]);

  return {pokemonData, loading, error, auth, items};
};

export default usePokemonListFavorite;
