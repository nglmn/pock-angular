import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsTableComponent } from './components/pokemons-table/pokemons-table.component';
import { PokemonsDataComponent } from './components/pokemons-data/pokemons-data.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { PokemonsComponent } from './pokemons.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent,
  },
];
@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonsTableComponent,
    PokemonsDataComponent,
    PokemonsListComponent,
    PokemonInfoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class PokemonsModule {}
