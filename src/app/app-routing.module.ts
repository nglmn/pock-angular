import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HogwardsComponent } from './pages/hogwards/hogwards.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { StudentsListComponent } from './pages/hogwards/components/students-list/students-list.component';
import { SchoolNamesListComponent } from './pages/hogwards/components/school-names-list/school-names-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pokemons',
    component: PokemonsComponent,
  },
  {
    path: 'hogwards',
    component: HogwardsComponent,
    children: [{ path: ':school', component: StudentsListComponent }],
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
