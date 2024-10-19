import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecboxesComponent } from './checboxes.component';

describe('ChecboxesComponent', () => {
  let component: ChecboxesComponent;
  let fixture: ComponentFixture<ChecboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecboxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChecboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
