import PokeCard from './PokeCard';
import UsePokeCard from './UsePokeCard';
import type {PokeCardContainerProps} from './types';

const PokeCardContainer = (props: PokeCardContainerProps) => {
  const usePokemonprops = UsePokeCard();
  // eslint-disable-next-line react/react-in-jsx-scope
  return <PokeCard {...props} {...usePokemonprops} />;
};

export default PokeCardContainer;
