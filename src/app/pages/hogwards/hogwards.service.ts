import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import students from './hogwards-students.json';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HogwardsService {
  constructor() {}

  uniqueSchoolNames: any;

  students$: any;

  studentsData$ = of(students);

  getHogwardsSchools() {
    return this.studentsData$.pipe(
      map((schoolName) => {
        const allSchoolNames = schoolName.map((student: any) => student.house);
        this.uniqueSchoolNames = [...new Set(allSchoolNames)];
        return this.uniqueSchoolNames;
      })
    );
  }
}
