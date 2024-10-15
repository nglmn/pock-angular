import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HufflepuffSchoolComponent } from './hufflepuff-school.component';

describe('HufflepuffSchoolComponent', () => {
  let component: HufflepuffSchoolComponent;
  let fixture: ComponentFixture<HufflepuffSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HufflepuffSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HufflepuffSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
