import {useState, useEffect} from 'react';
import {fetchPokemonDetails} from './utils/fetchPokeDetails';
import {typeColors} from './utils/typeColor';

export const getTypeColor = (type: string): string => {
  return typeColors[type.toLowerCase()] || '#A8A878';
};

const usePokemonDetails = (props: any) => {
  const {
    route: {params},
  } = props;

  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulamos un retardo de 2 segundos
        setTimeout(async () => {
          const data = await fetchPokemonDetails(params.id);
          const newPokemonData = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            typeColor: getTypeColor(data.types[0].type.name),
            type: data.types.map(typeInfo => ({
              name: typeInfo.type.name,
              color: getTypeColor(typeInfo.type.name),
            })),
            stats: data.stats,
          };

          setPokemonData(newPokemonData);
          setLoading(false);
        }, 2000); // Ajusté el tiempo de espera a 2 segundos
      } catch (err) {
        setError('Failed to fetch Pokémon');
        setLoading(false);
      }
    };

    fetchData(); // Llamar a la función de obtención de datos
  }, [params.item]);

  return {pokemonData, loading, error};
};

export default usePokemonDetails;
