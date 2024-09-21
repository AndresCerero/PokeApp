import React from 'react';
import {View} from 'react-native';
import PokeContent from './src/components/pokemons';
import ButtonContainer from './src/components/Button';
import NewsletterContainer from './src/components/Newsletter/Newsletter';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      {/* <ButtonContainer label="Plus" /> */}
      {/* <PokeContent /> */}
      {/* <NewsletterContainer
        title={'Subscribe to our newsletter'}
        placeholder={'Enter your email'}
        buttonlabel={'Subscribe'}
        successMessage={'Thank you for subscribing!'}
        retryButtonLabel={'Back to form'}
      /> */}
    </NavigationContainer>
  );
}
