import { Component, OnInit } from '@angular/core';
import { HogwardsService } from '../../hogwards.service';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-school-names-list',
  templateUrl: './school-names-list.component.html',
  styleUrl: './school-names-list.component.scss',
})
export class SchoolNamesListComponent implements OnInit {
  constructor(private hogwardsService: HogwardsService) {}

  public schoolNames$!: Observable<string[]>;

  ngOnInit(): void {
    this.schoolNames$ = this.hogwardsService.getHogwardsSchools();
  }
}
