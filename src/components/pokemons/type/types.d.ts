export interface PokeContainer {
    title ? : string,
    url ?: string
}

export interface UsePokemon {
    pokemons: Pokemon[]
}

export type Pokemon = {
    name: string,
    type: string,
    level: number,
    moves: string[]
};

export type PokeProps = PokeContainer & UsePokemon
