import { TestBed } from '@angular/core/testing';

import { HogwardsService } from './hogwards.service';

describe('HogwardsService', () => {
  let service: HogwardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HogwardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
