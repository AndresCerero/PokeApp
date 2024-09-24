import {useState, useEffect} from 'react';
import {fetchPokemonDetails} from './utils/fetchPokeDetails';
import {typeColors} from './utils/typeColor';
import AddPokemon from './AddPokemon/addPokemon';
import Icon from 'react-native-vector-icons/Ionicons';
import useAuth from '../../hooks/useAuth';

export const getTypeColor = (type: string): string => {
  return typeColors[type.toLowerCase()] || '#A8A878';
};

const usePokemonDetails = (props: any) => {
  const {
    navigation,
    route: {params},
  } = props;
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {auth} = useAuth();

  console.log(auth);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <AddPokemon id={pokemonData?.id} /> : null),
      headerLeft: () => (
        <Icon
          name="arrow-back-outline"
          color="#fff"
          size={40}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemonData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        setTimeout(async () => {
          const data = await fetchPokemonDetails(params.item.id);
          const newPokemonData = {
            id: data.id,
            name: data.name,
            image: data.sprites.other.home.front_default,
            typeColor: getTypeColor(data.types[0].type.name),
            type: data.types.map(typeInfo => ({
              name: typeInfo.type.name,
              color: getTypeColor(typeInfo.type.name),
            })),
            stats: data.stats,
          };

          setPokemonData(newPokemonData);
          setLoading(false);
        }, 100);
      } catch (err) {
        setError('Failed to fetch Pokémon');
        setLoading(false);
      }
    };

    fetchData();
  }, [params.item.id]);

  return {pokemonData, loading, error};
};

export default usePokemonDetails;
