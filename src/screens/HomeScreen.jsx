import {View, Text, Button} from 'react-native';
import React from 'react';
import PokemonList from '../components/PokeList/pokeList';

const HomeScreen = props => {
  const {navigation} = props;

  const goToSettings = (pageName) => {
    navigation.navigate(pageName);
  };

  console.log(props);
  return (
    <View>
      <Text>HomeScreen</Text>
      <PokemonList />
      <Button onPress={() => goToSettings('Settings')} title="Settings" />
    </View>
  );
};

export default HomeScreen;
