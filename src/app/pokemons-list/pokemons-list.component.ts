import { AfterViewInit, Component, Input } from '@angular/core';
import { PokemonsSummary } from '../pokemons-data/pokemons-data.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.scss',
})
export class PokemonsListComponent {
  @Input() pokemonsArray: PokemonsSummary[] = [];
  public statistic: any;
  public pokemonInfoData: any = [];
  public pokemonName: string = '';
  public pokemonCharacter: any = [];

  constructor(public http: HttpClient) {}

  onShowPokemonInfo(url: string) {
    this.http.get(url).subscribe((response) => {
      this.statistic = response;

      this.pokemonInfoData = this.getCharacteristicPokemon(
        this.statistic.stats
      );

      this.pokemonName = this.statistic.name;
      this.pokemonCharacter = this.pokemonInfoData;
    });
  }

  getCharacteristicPokemon(statisticItem: any) {
    const resultStatisticArray: any = [];

    statisticItem.forEach((item: any) => {
      resultStatisticArray.push({
        characteristicName: item.stat.name,
        value: item.base_stat,
      });
    });

    return resultStatisticArray;
  }
}
