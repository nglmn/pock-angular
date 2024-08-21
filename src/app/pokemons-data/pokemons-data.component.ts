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
import { PokemonService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-pokemons-data',
  templateUrl: './pokemons-data.component.html',
  styleUrl: './pokemons-data.component.scss',
})
export class PokemonsDataComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public linkApi: string = 'https://pokeapi.co/api/v2/pokemon/';
  public responseData: PokemonsSummary[] | undefined;

  constructor(
    public http: HttpClient,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(({ results }) => {
      this.responseData = results;
    });

    data.pokemons.forEach((pokemon: any) => {
      const stat = this.adaptStat(pokemon.stats);
      this.pokemons.push({ name: pokemon.name, statistics: stat });
    });
  }

  adaptStat(statistics: InputStatistic[]): Statistics {
    //better to use additional function for service, in case if you want add another logic
    return this.pokemonService.adaptStat(statistics);
  }
}
