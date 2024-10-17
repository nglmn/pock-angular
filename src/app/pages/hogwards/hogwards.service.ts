import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { studentsWithId } from './hogwards-students';
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
    return of(studentsWithId);
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
