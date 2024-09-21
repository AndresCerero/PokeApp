import {View, Text, Button} from 'react-native';
import React from 'react';

const SettingsScreen = props => {
  const {navigation} = props;
  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToHome('Home')} title="Ir a Home" />
    </View>
  );
};

export default SettingsScreen;
