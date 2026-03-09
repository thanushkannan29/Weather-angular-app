import { TestBed } from '@angular/core/testing';

import { CityStateService } from './city-state.service';

describe('CityState', () => {
  let service: CityStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
