import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../hogwards-interfaces';

@Component({
  selector: 'app-edit-student-modal',
  templateUrl: './edit-student-modal.component.html',
  styleUrl: './edit-student-modal.component.scss',
})
export class EditStudentModalComponent implements OnInit {
  studentForm!: FormGroup;

  constructor(
    public modal: MatDialogRef<EditStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      student: Student;
    }
  ) {}

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(this.data.student.name),
    });
  }

  onSave(): void {
    this.modal.close({ ...this.data.student, ...this.studentForm.value });
  }

  onCancel(): void {
    this.modal.close();
  }
}
