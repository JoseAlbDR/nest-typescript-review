import { Move, PokeApiResponse } from './interfaces/pokeapi-response.interface';
import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetchAdapter,
} from '../api/pokeApi.adapter';

export class Pokemon {
  get imageUrl() {
    return `http://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) {}

  public scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeApiResponse>(
      'https://pokeapi.co/api/v2/pokemon/charmander'
    );

    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(2, 'Charmander', pokeApiFetch);
