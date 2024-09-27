import {View, StyleSheet} from 'react-native';
import React from 'react';
import PokeListFavorite from '../components/PokeListFavorite/pokeListFavorite';

export default function FavoritosScreen() {
  return (
    <View style={styles.containerScreenFavorite}>
      <PokeListFavorite />
    </View>
  );
}

const styles = StyleSheet.create({
  containerScreenFavorite: {
    flex: 1,
    justifyContent: 'center',
  },
});
