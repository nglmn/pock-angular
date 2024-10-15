import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlytherinSchoolComponent } from './slytherin-school.component';

describe('SlytherinSchoolComponent', () => {
  let component: SlytherinSchoolComponent;
  let fixture: ComponentFixture<SlytherinSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlytherinSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlytherinSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
