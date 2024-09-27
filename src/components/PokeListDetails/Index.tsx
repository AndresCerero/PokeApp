import PokemonListDetails from './pokeListDetails';
import {usePokemonListDetails} from './usePokeListDetails';
import type {PokeListDetailsContainerProps} from './type';

const PokeListDetailsContainer = (props: PokeListDetailsContainerProps) => {
  const usePokeListDetailsprops = usePokemonListDetails();
  // eslint-disable-next-line react/react-in-jsx-scope
  return <PokemonListDetails {...props} {...usePokeListDetailsprops} />;
};

export default PokeListDetailsContainer;
