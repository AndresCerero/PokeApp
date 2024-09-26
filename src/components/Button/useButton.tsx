import {useState} from 'react';

export const useButton = () => {
  const [pressedCount, setPressedCount] = useState(0);

  const PressUp = () => {
    setPressedCount(pressedCount + 1);
    console.log(`Button pressed ${pressedCount + 1} times`);
  };

  return {
    PressUp,
    pressedCount,
  };
};
