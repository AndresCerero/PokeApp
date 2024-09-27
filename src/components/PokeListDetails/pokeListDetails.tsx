import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PokeCardContainer from '../Pokecard/Index';
import SearchPokemon from '../SearchPokemon/searchPokemon';
import type {PokeListDetailsProps} from './type';

const PokemonListDetails = ({
  pokemonData,
  loading,
  error,
  loadMorePokemon,
  loadingMore,
}: PokeListDetailsProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerListDetails}>
      <SearchPokemon />
      {loading ? (
        <View>
          <Text>Loading...</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <PokeCardContainer
          pokemonData={pokemonData}
          navigation={navigation}
          loadMorePokemon={loadMorePokemon}
          loadingMore={loadingMore}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerListDetails: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#F8F9FA',
  },
});

export default PokemonListDetails;
