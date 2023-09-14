export const pokemonIds = [1, 2, 3, 4, 5, 6, 7];

interface IPokemon {
  id: number;
  name: string;
}

export const bulbasaur: IPokemon = {
  id: 1,
  name: 'Bulbasaur',
};

export const charmander: IPokemon = {
  id: 2,
  name: 'Charmander',
};

export const pokemons: IPokemon[] = [bulbasaur];
pokemons.push(charmander);
