import { Move, PokeApiResponse } from './interfaces/pokeapi-response.interface';
import { PokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {
  get imageUrl() {
    return `http://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: PokeApiAdapter
  ) {}

  public scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get(
      'https://pokeapi.co/api/v2/pokemon/charmander'
    );

    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();

export const charmander = new Pokemon(2, 'Charmander', pokeApi);
