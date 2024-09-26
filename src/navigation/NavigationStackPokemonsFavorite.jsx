import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import FavoritosScreen from '../screens/FavoritosScreen';

const Stack = createNativeStackNavigator();

const NavigationStackPokemonsFavorite = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritePokedex"
        component={FavoritosScreen}
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

export default NavigationStackPokemonsFavorite;
