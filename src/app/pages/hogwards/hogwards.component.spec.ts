import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwardsComponent } from './hogwards.component';

describe('HogwardsComponent', () => {
  let component: HogwardsComponent;
  let fixture: ComponentFixture<HogwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HogwardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HogwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
