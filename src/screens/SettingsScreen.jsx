import {View, Text, Button} from 'react-native';
import React from 'react';
import PokemonList from '../components/PokeListDetails/pokeListDetails';

const SettingsScreen = props => {
  const {navigation} = props;
  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View>
      <Text>SettingsScreen</Text>
      <PokemonList/>
      <Button onPress={() => goToHome('Home')} title="Ir a Home" />
    </View>
  );
};

export default SettingsScreen;
