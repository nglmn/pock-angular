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
import { switchMap } from 'rxjs';

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
    const pokemonID = this.pokemonService.getIdFromUrl(url);

    this.pokemonService.getOnePokemonData(pokemonID).subscribe((response: any) => {
      const pokemonStatistics = this.pokemonService.adaptStat(response.stats);
      this.selectedPokemon = { name: response.name, pokemonStatistics };
    });
  }

  onShowLocations(url: string) {
    const pokemonID = this.pokemonService.getIdFromUrl(url);

    this.pokemonService.getPokemonLocation(pokemonID)
      .pipe(
        switchMap((response: any): any =>
        {
          const locationAreaUrl = response[0]?.location_area.url;
          return this.pokemonService.getIndexFromLocationArea(locationAreaUrl);
        }) //switch map switch to another observable, and close the previous observable 
      )
      .subscribe({
        next: (response: any) => {
          // console.log("name:", response[0]?.location_area.name);
          console.log("game-index:", response.game_index);
        },
        error: (e) => console.log("location area is unknown")
      })
  }
}
