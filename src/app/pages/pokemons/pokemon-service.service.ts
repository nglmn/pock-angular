import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  InputStatistic,
  PokemonsList,
  Statistics,
  StatName,
} from './components/pokemons-data/pokemons-data.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(public http: HttpClient) {}

  private pokemonDataApi: string = 'https://pokeapi.co/api/v2/pokemon';
  private pokemonLocationAreaApi: string =
    'https://pokeapi.co/api/v2/location-area';

  getPokemons() {
    return this.http.get<PokemonsList>(this.pokemonDataApi);
  }

  getOnePokemonData(id: number) {
    return this.http.get(`${this.pokemonDataApi}/${id}`);
  }

  getPokemonLocation(pokemonId: number) {
    return this.http.get(`${this.pokemonDataApi}/${pokemonId}/encounters`);
  }

  getIndexFromLocationArea(locationUrl: string) {
    return this.http.get(locationUrl);
  }

  getIdFromUrl(url: string): number {
    const separatedUrl = url.split('/');
    const pokemonId = separatedUrl[separatedUrl.length - 2];
    return +pokemonId;
  }

  adaptStat(statistics: InputStatistic[]): Statistics {
    const result = {} as Statistics;
    statistics.forEach(({ base_stat, stat }) => {
      result[stat.name as StatName] = base_stat;
    });
    return result;
  }
}
