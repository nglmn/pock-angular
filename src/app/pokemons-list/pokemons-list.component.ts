import { Component, Input } from '@angular/core';
import {
  InputStatistic,
  PokemonsSummary,
  Statistics,
  StatName,
} from '../pokemons-data/pokemons-data.interface';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../pokemon-info/pokemon-info.interface';
import { PokemonService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.scss',
})
export class PokemonsListComponent {
  @Input() pokemons: PokemonsSummary[] = [];
  public selectedPokemon: PokemonData | undefined;

  constructor(
    public http: HttpClient,
    private pokemonService: PokemonService
  ) {}

  onShowPokemonInfo(url: string) {
    this.pokemonService.getOnePokemonData(url).subscribe((response: any) => {
      const pokemonStatistics = this.pokemonService.adaptStat(response.stats);
      this.selectedPokemon = { name: response.name, pokemonStatistics };
    });
  }
}
