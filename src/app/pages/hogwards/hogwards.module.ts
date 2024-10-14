import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolNamesListComponent } from './components/school-names-list/school-names-list.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { HogwardsComponent } from './hogwards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HogwardsComponent,
    SchoolNamesListComponent,
    StudentsListComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class HogwardsModule {}
