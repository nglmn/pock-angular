import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GryffindorSchoolComponent } from './gryffindor-school.component';

describe('GryffindorSchoolComponent', () => {
  let component: GryffindorSchoolComponent;
  let fixture: ComponentFixture<GryffindorSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GryffindorSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GryffindorSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
