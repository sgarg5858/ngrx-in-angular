import { TestBed } from '@angular/core/testing';

import { LogResponseService } from './log-response.service';

describe('LogResponseService', () => {
  let service: LogResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
