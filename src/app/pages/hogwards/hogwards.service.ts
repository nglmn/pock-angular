import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import students from './hogwards-students.json';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HogwardsService {
  constructor() {}

  filteredStudents: {
    gender: string;
    age: number;
    alive: boolean;
    relationToHarryPotter: string;
    house: string;
    specialAbility: string;
  }[] = [];

  getStudents() {
    return of(students);
  }

  getHogwardsSchools() {
    return this.getStudents().pipe(
      map((schoolName) => {
        const allSchoolNames = schoolName.map((student: any) => student.house);
        const uniqueSchoolNames = [...new Set(allSchoolNames)];
        return uniqueSchoolNames;
      })
    );
  }
}
