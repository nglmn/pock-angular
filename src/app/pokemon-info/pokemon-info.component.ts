import { AfterViewInit, Component, Input } from '@angular/core';
import { PokemonData } from './pokemon-info.interface';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.scss',
})
export class PokemonInfoComponent {
  @Input() pokemonData: PokemonData | undefined;

  getStatistic(data: any) {
    console.log(data); //почему 8 ответов приходит
    return Object.entries(data);
  }
}
