import { TestBed } from '@angular/core/testing';

import { SapPmService } from './sap-pm.service';

describe('SapPmService', () => {
  let service: SapPmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SapPmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
