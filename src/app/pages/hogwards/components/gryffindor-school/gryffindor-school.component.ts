import { Component, Input, OnInit, Output } from '@angular/core';
import { HogwardsService } from '../../hogwards.service';
import { map, Observable, Observer } from 'rxjs';
import { StudentsListComponent } from '../students-list/students-list.component';
import { Student } from '../../hogwards-interfaces';

@Component({
  selector: 'app-gryffindor-school',
  templateUrl: './gryffindor-school.component.html',
  styleUrl: './gryffindor-school.component.scss',
})
export class GryffindorSchoolComponent implements OnInit {
  constructor(private hogwardsService: HogwardsService) {}

  filteredStudentsList: any;

  ngOnInit(): void {
    this.hogwardsService
      .getStudents()
      .pipe(
        map((students: Student[]): Student[] => {
          return students.filter((student: Student): boolean => {
            return student.house === 'Gryffindor';
          });
        })
      )
      .subscribe((res: Student[]): void => {
        this.filteredStudentsList = res;
      });
  }
}
