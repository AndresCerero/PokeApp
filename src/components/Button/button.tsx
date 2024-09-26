import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './type/types';

const Button = ({label = 'Presionar', handlePress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
