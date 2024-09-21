//Container

import React from 'react';
import Poke from './pokemon';
import usePokemon from './usepokemon';

import type {PokeContainer} from './type/types';

const PokeContent = (props: PokeContainer) => {
  const hook = usePokemon();
  return (
      <Poke {...props} {...hook} />
  )
};

export default PokeContent;
