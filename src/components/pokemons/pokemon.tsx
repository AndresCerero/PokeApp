//Screen

import React from 'react';
import {View, Text} from 'react-native';

import type {PokeProps} from './type/types';

const Poke = ({pokemons, title}: PokeProps) => {
  return (
    <View>
      <Text>{title}</Text>
      {pokemons.map((pokemon, index) => (
        <View key={index}>
          <Text>{pokemon.name}</Text>
          <Text>Type: {pokemon.type}</Text>
          <Text>Level: {pokemon.level}</Text>
          <Text>Moves:</Text>
          {pokemon.moves.map((move, moveIndex) => (
            <Text key={moveIndex}>- {move}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Poke;
