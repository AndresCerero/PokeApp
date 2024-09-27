import {View, StyleSheet} from 'react-native';
import React from 'react';
import PokeListDetailsContainer from '../components/PokeListDetails/Index';


const PokedexScreen = () => {
  return (
    <View style={styles.containerScreenFavorite}>
      <PokeListDetailsContainer />
    </View>
  );
};
const styles = StyleSheet.create({
  containerScreenFavorite: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PokedexScreen;
