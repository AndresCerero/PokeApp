import {View} from 'react-native';
import React, {useEffect} from 'react';
import PokemonDetails from '../components/PokeDetails/pokemonDetails';

const PokemonDetailsScreen = props => {

  return (
    <View>
      <PokemonDetails {...props} />
    </View>
  );
};

export default PokemonDetailsScreen;
