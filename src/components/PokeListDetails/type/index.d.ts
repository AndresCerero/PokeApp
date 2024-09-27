export interface PokeListDetailsContainerProps {}

export interface UsePokeListDetailsProps {
  pokemonData: any[];
  loading: boolean;
  error: string | null;
  loadMorePokemon: () => void;
  loadingMore: boolean;
}

export interface PokeListDetailsScreenProps {}

export type PokeListDetailsProps = PokeListDetailsContainerProps &
  UsePokeListDetailsProps &
  PokeListDetailsScreenProps;
