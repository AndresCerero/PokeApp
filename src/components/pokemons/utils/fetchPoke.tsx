import type { Pokemon } from '../type/types';

const fetchPokemon = async (): Promise<Pokemon[]> => {
  // Simular un retraso como si fuera una API
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: 'Pikachu',
          type: 'Electric',
          level: 12,
          moves: ['Thunder Shock', 'Quick Attack', 'Iron Tail'],
        },
        {
          name: 'Charmander',
          type: 'Fire',
          level: 8,
          moves: ['Ember', 'Scratch', 'Growl'],
        },
        {
          name: 'Bulbasaur',
          type: 'Grass/Poison',
          level: 10,
          moves: ['Vine Whip', 'Tackle', 'Growl'],
        },
        {
          name: 'Squirtle',
          type: 'Water',
          level: 9,
          moves: ['Water Gun', 'Tackle', 'Withdraw'],
        },
      ]);
    }, 1000);
  });
};

export default fetchPokemon;
