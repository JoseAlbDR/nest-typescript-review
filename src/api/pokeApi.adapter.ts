import axios from 'axios';
import { PokeApiResponse } from '../bases/interfaces/pokeapi-response.interface';

export class PokeApiAdapter {
  private readonly axios = axios;

  async get(url: string) {
    const { data } = await this.axios.get<PokeApiResponse>(url);
    return data;
  }

  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string) {}
}
