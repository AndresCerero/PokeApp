import {View} from 'react-native';
import React from 'react';
import PokemonDetails from '../components/PokeDetails/pokemonDetails';

const PokemonDetailsScreen = props => {

  return (
    <View>
      <PokemonDetails {...props} />
    </View>
  );
};

export default PokemonDetailsScreen;
