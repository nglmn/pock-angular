import { Component, OnInit } from '@angular/core';
import { HogwardsService } from '../../hogwards.service';
import { Student } from '../../hogwards-interfaces';
import { map } from 'rxjs';

@Component({
  selector: 'app-ravenclaw-school',
  templateUrl: './ravenclaw-school.component.html',
  styleUrl: './ravenclaw-school.component.scss',
})
export class RavenclawSchoolComponent implements OnInit {
  constructor(private hogwardsService: HogwardsService) {}

  filteredStudentsList: Student[] = [];

  ngOnInit(): void {
    this.hogwardsService
      .getStudents()
      .pipe(
        map((students: Student[]): Student[] => {
          return students.filter((student: Student) => {
            return student.house === 'Ravenclaw';
          });
        })
      )
      .subscribe((res: Student[]) => {
        this.filteredStudentsList = res;
      });
  }
}
