//Container props

import {useEffect, useState} from 'react';
import fetchPokemon from './utils/fetchPoke';
import type {UsePokemon, Pokemon} from './type/types';

const usePokemon = (): UsePokemon => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const data = await fetchPokemon();
        console.log('Pokémon data fetched:', data); // Agregas el console.log para ver la data
        setPokemons(data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    getPokemons();
  }, []);

  return {
    pokemons,
  };
};

export default usePokemon;
