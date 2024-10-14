import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNamesListComponent } from './school-names-list.component';

describe('SchoolNamesListComponent', () => {
  let component: SchoolNamesListComponent;
  let fixture: ComponentFixture<SchoolNamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolNamesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolNamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
