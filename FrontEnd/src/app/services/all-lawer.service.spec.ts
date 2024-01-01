import { TestBed } from '@angular/core/testing';

import { AllLawerService } from './all-lawer.service';

describe('AllLawerService', () => {
  let service: AllLawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllLawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
