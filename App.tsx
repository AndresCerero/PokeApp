import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';
// import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
      {/* <NavigationDrawer /> */}
    </NavigationContainer>
  );
}
