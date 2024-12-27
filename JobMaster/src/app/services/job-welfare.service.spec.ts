import { TestBed } from '@angular/core/testing';

import { JobWelfareService } from './job-welfare.service';

describe('JobWelfareService', () => {
  let service: JobWelfareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobWelfareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
