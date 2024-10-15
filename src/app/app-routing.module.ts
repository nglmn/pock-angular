import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('../app/pages/pokemons/pokemons.module').then(
        (m) => m.PokemonsModule
      ),
  },
  {
    path: 'hogwards',
    loadChildren: () =>
      import('../app/pages/hogwards/hogwards.module').then(
        (m) => m.HogwardsModule
      ),
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
