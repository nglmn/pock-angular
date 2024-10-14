import { Component, OnDestroy, OnInit } from '@angular/core';
import { HogwardsService } from '../../hogwards.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private hogwardsService: HogwardsService
  ) {}

  selectedSchoolStudents: any = [];

  public currentRoute: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.currentRoute = params.get('school')!;
    });

    this.selectedSchoolStudents = this.hogwardsService.studentsData$.pipe(
      map((student: any) => {
        return student.filter(
          ({ house }: any) => house.toLowerCase() === this.currentRoute
        );
      })
    );
  }

  ngOnDestroy(): void {
    if (this.currentRoute) {
      this.currentRoute.unsubscribe();
    }
  }
}
