import { Component, OnInit, Output } from '@angular/core';
import { HogwardsService } from '../../hogwards.service';
import { map, Observable, Observer } from 'rxjs';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'app-gryffindor-school',
  templateUrl: './gryffindor-school.component.html',
  styleUrl: './gryffindor-school.component.scss',
})
export class GryffindorSchoolComponent implements OnInit {
  constructor(private hogwardsServicee: HogwardsService) {}

  ngOnInit(): void {
    this.hogwardsServicee
      .getStudents()
      .pipe(
        map((students) => {
          return students.filter((student) => {
            return student.house === 'Gryffindor';
          });
        })
      )
      .subscribe((res) => {
        this.hogwardsServicee.filteredStudents = res;
      });
  }
}
