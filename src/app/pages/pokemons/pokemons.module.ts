import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';
import { PokemonsDataComponent } from './components/pokemons-data/pokemons-data.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonsComponent } from './pokemons.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonsTableComponent,
    PokemonsDataComponent,
    PokemonsListComponent,
    PokemonInfoComponent,
  ],
  imports: [CommonModule],
  exports: [],
})
export class PokemonsModule {}
