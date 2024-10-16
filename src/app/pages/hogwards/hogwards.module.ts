import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolNamesListComponent } from './components/school-names-list/school-names-list.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { HogwardsComponent } from './hogwards.component';
import { RouterModule, Routes } from '@angular/router';
import { RavenclawSchoolComponent } from './components/ravenclaw-school/ravenclaw-school.component';
import { HufflepuffSchoolComponent } from './components/hufflepuff-school/hufflepuff-school.component';
import { SlytherinSchoolComponent } from './components/slytherin-school/slytherin-school.component';
import { GryffindorSchoolComponent } from './components/gryffindor-school/gryffindor-school.component';

const routes: Routes = [
  {
    path: '',
    component: HogwardsComponent,
    children: [
      {
        path: 'ravenclaw',
        component: RavenclawSchoolComponent,
      },
      {
        path: 'hufflepuff',
        component: HufflepuffSchoolComponent,
      },
      {
        path: 'slytherin',
        component: SlytherinSchoolComponent,
      },
      {
        path: 'gryffindor',
        component: GryffindorSchoolComponent,
      },
      {
        path: '', //дефолтний шлях коли школа не вибрана
        redirectTo: 'gryffindor',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    StudentsListComponent,
    HogwardsComponent,
    SchoolNamesListComponent,
    GryffindorSchoolComponent,
    HufflepuffSchoolComponent,
    SlytherinSchoolComponent,
    RavenclawSchoolComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class HogwardsModule {}
