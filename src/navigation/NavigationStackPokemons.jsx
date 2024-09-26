import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';

const Stack = createNativeStackNavigator();

const NavigationStackPokemons = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePokedex"
        component={PokedexScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScreenPokemon"
        component={PokemonDetailsScreen}
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStackPokemons;
