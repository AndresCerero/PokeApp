import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab';
import BootSplash from 'react-native-bootsplash';
import {AuthProvider} from './src/context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {

  useEffect(() => {
    const clearStorageOnStartup = async () => {
      try {
        await AsyncStorage.clear();
      } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
      }
    };

    clearStorageOnStartup();
  }, []);

  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <AuthProvider>
        <NavigationTab />
      </AuthProvider>
      {/* <NavigationDrawer /> */}
    </NavigationContainer>
  );
}
