import { Component, OnInit } from '@angular/core';
import { HogwardsService } from '../../hogwards.service';
import { map } from 'rxjs';
import { Student } from '../../hogwards-interfaces';

@Component({
  selector: 'app-hufflepuff-school',
  templateUrl: './hufflepuff-school.component.html',
  styleUrl: './hufflepuff-school.component.scss',
})
export class HufflepuffSchoolComponent implements OnInit {
  constructor(private hogwardsService: HogwardsService) {}

  filteredStudentsList: Student[] = [];

  ngOnInit(): void {
    this.hogwardsService
      .getStudents()
      .pipe(
        map((students: Student[]): Student[] => {
          return students.filter((student: Student): boolean => {
            return student.house === 'Hufflepuff';
          });
        })
      )
      .subscribe((res: Student[]): void => {
        this.filteredStudentsList = res;
      });
  }
}
