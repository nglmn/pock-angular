import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenclawSchoolComponent } from './ravenclaw-school.component';

describe('RavenclawSchoolComponent', () => {
  let component: RavenclawSchoolComponent;
  let fixture: ComponentFixture<RavenclawSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavenclawSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RavenclawSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
