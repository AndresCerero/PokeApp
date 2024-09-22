import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';
import BootSplash from 'react-native-bootsplash';
// import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer onReady={()=>BootSplash.hide({fade: true})}>
      <NavigationTab />
      {/* <NavigationDrawer /> */}
    </NavigationContainer>
  );
}
