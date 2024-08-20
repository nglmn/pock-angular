import { Component, OnInit } from '@angular/core';
import {
  Pokemon,
  InputStatistic,
  Statistics,
  StatName,
  PokemonsList,
  PokemonsSummary,
} from './pokemons-data.interface';
import { HttpClient } from '@angular/common/http';
import data from '../../../data.json';

@Component({
  selector: 'app-pokemons-data',
  templateUrl: './pokemons-data.component.html',
  styleUrl: './pokemons-data.component.scss',
})
export class PokemonsDataComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public linkApi: string = 'https://pokeapi.co/api/v2/pokemon/';
  public responseData: PokemonsSummary[] | undefined;

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get<PokemonsList>(this.linkApi).subscribe(({ results }) => {
      this.responseData = results;
    });

    data.pokemons.forEach((pokemon: any) => {
      const stat = this.getStat(pokemon.stats);
      this.pokemons.push({ name: pokemon.name, statistics: stat });
    });
  }

  getStat(statistics: InputStatistic[]): Statistics {
    const result = {} as Statistics;
    statistics.forEach(({ base_stat, stat }) => {
      result[stat.name as StatName] = base_stat;
    });
    return result;
  }
}
