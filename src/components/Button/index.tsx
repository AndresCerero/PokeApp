import React from 'react';

import Button from './button';
import {useButton} from './useButton';
import {ButtonContainerProps} from './type/types';

const ButtonContainer = (props: ButtonContainerProps) => {
  const {PressUp} = useButton();
  return <Button {...props} handlePress={PressUp} />;
};

export default ButtonContainer;
