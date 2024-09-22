import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationStackPokemons from './NavigationStackPokemons';
import FavoritosScreen from '../screens/FavoritosScreen';
import PerfilScreen from '../screens/PerfilScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Pokeball from '../Assets/Icons/pokeball';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pokedex"
      screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={NavigationStackPokemons}
        options={{
          tabBarIcon: () => (
            <Pokeball width={100} height={100} style={style.pokeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  pokeIcon: {
    position: 'absolute',
    top: -50,
    borderColor: 'blue',
    borderWidth: 4,
  },
});

export default NavigationTab;
