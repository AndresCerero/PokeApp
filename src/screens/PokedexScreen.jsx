import {View} from 'react-native';
import React from 'react';
import PokemonList from '../components/PokeListDetails/pokeListDetails';

const PokedexScreen = props => {


  console.log(props);
  return (
    <View>
      <PokemonList/>
    </View>
  );
};

export default PokedexScreen;
