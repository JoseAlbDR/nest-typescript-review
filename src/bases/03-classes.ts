import axios from 'axios';
import { Move, PokeApiResponse } from './interfaces/pokeapi-response.interface';

export class Pokemon {
  get imageUrl() {
    return `http://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string // public imageUrl: string
  ) {}

  public scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeApiResponse>(
      'https://pokeapi.co/api/v2/pokemon/charmander'
    );

    return data.moves;
  }
}

export const charmander = new Pokemon(2, 'Charmander');
