import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../hogwards-interfaces';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent implements OnInit {
  @Input() studentsList: any;

  selectedSchoolStudents: Student[] = [];

  ngOnInit(): void {
    this.selectedSchoolStudents = this.studentsList;
  }
}
