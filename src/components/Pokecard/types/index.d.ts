export interface PokeCardContainerProps {
  pokemonData: any[];
  navigation;
  loadMorePokemon?: () => void;
  loadingMore?: boolean;
}
export interface PokeCardScreenProps {}
export interface UsePokeCardProps {}

export type PokeCardProps = PokeCardContainerProps &
  PokeCardScreenProps &
  UsePokeCardProps;
