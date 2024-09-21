import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';

const Stack = createNativeStackNavigator();

const NavigationStackPokemons = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ScreenPokemon" component={PokemonDetailsScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStackPokemons;
