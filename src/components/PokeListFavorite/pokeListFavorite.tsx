import React from 'react';
import {View, Text, ActivityIndicator, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import usePokemonListFavorite from './usePokeListFavorite';
import Logout from '../Logout/Logout';
import PokeCardContainer from '../Pokecard/PokeCard';
import SearchPokemon from '../SearchPokemon/searchPokemon';
import Loading from '../Loding/Loading';

export default function PokeListFavorite() {
  const {pokemonData, loading, error, auth, items} = usePokemonListFavorite();
  const navigation = useNavigation();

  return !auth ? (
    <View style={styles.containerLogout}>
      <Logout />
    </View>
  ) : (
    <View style={styles.containerFavoritos}>
      <SearchPokemon />
      {loading ? (
        <Loading />
      ) : error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : items.length === 0 ? (
        <View style={styles.containerNotFavorite}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            }}
            style={styles.imageNotFavorite}
          />
          <Text style={styles.textNotFavorite}>
            No tienes pokemones favoritos
          </Text>
          <Text style={styles.subTextNotFavorite}>
            Agrega algunos a favoritos
          </Text>
        </View>
      ) : (
        <PokeCardContainer pokemonData={pokemonData} navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerNotFavorite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageNotFavorite: {
    width: 200,
    height: 200,
  },
  textNotFavorite: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#202426',
    paddingBottom:10,
  },
  subTextNotFavorite: {
    fontSize: 14,
  },
  containerLogout: {
    flex: 1,
    justifyContent: 'center',
  },
  containerFavoritos: {
    flex: 1,
    paddingTop: 70,
  },
});
