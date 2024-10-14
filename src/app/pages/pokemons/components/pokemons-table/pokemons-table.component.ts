import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemons-data/pokemons-data.interface';

@Component({
  selector: 'app-pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrl: './pokemons-table.component.scss',
})
export class PokemonsTableComponent {
  @Input() pokemonsList: Pokemon[] = [];
}
