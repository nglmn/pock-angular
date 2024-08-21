import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  InputStatistic,
  PokemonsList,
  Statistics,
  StatName,
} from '../pokemons-data/pokemons-data.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(public http: HttpClient) {}

  private linkApi: string = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemons() {
    return this.http.get<PokemonsList>(this.linkApi);
  }

  getOnePokemonData(url: string) {
    return this.http.get(url);
  }

  adaptStat(statistics: InputStatistic[]): Statistics {
    const result = {} as Statistics;
    statistics.forEach(({ base_stat, stat }) => {
      result[stat.name as StatName] = base_stat;
    });
    return result;
  }
}
