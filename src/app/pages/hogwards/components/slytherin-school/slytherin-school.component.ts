import { Component, OnInit } from '@angular/core';
import { HogwardsService } from '../../hogwards.service';
import { Student } from '../../hogwards-interfaces';
import { map } from 'rxjs';

@Component({
  selector: 'app-slytherin-school',
  templateUrl: './slytherin-school.component.html',
  styleUrl: './slytherin-school.component.scss',
})
export class SlytherinSchoolComponent implements OnInit {
  constructor(private hogwardsService: HogwardsService) {}

  filteredStudentsList: Student[] = [];

  ngOnInit(): void {
    this.hogwardsService
      .getStudents()
      .pipe(
        map((students: Student[]): Student[] => {
          return students.filter((student: Student): boolean => {
            return student.house === 'Slytherin';
          });
        })
      )
      .subscribe((res: Student[]) => {
        this.filteredStudentsList = res;
      });
  }
}
