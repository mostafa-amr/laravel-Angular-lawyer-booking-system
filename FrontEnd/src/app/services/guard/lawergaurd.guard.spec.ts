import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { lawergaurdGuard } from './lawergaurd.guard';

describe('lawergaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => lawergaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
