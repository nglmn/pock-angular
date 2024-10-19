import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-checboxes',
  templateUrl: './checboxes.component.html',
  styleUrl: './checboxes.component.scss',
})
export class ChecboxesComponent implements OnInit {
  @ViewChildren(ChecboxesComponent) checkboxes!: QueryList<ChecboxesComponent>;

  ngOnInit(): void {
    console.log(this.checkboxes);
  }
}
