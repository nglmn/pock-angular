import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../hogwards-interfaces';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditStudentModalComponent } from '../../modals/edit-student-modal/edit-student-modal.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent implements OnInit {
  @Input() studentsList: any;

  selectedSchoolStudents: Student[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.selectedSchoolStudents = this.studentsList;
  }

  editStudent(student: Student): void {
    const dialogRef: MatDialogRef<EditStudentModalComponent> = this.dialog.open(
      EditStudentModalComponent,
      {
        width: '500px',
        data: { student },
      }
    );

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        const studentIndex: number = this.selectedSchoolStudents.findIndex(
          (student: Student) => {
            return student.id === res.id;
          }
        );
        this.selectedSchoolStudents[studentIndex].name = res.name;
      }
    });
  }
}
