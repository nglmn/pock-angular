import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { PokemonsDataComponent } from './pokemons-data/pokemons-data.component';
import { PokemonsTableComponent } from './pokemons-table/pokemons-table.component';
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsTableComponent,
    PokemonsDataComponent,
    PokemonsListComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
