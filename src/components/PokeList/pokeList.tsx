// components/PokemonList.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {usePokemon} from './usePokeList';

const PokemonList = () => {
  const {pokemonData, loading, error} = usePokemon();

  return (
    <View>
      {loading ? (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={pokemonData}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PokemonList;
