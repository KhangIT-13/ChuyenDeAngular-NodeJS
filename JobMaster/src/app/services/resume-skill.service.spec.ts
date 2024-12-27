import { TestBed } from '@angular/core/testing';

import { ResumeSkillService } from './resume-skill.service';

describe('ResumeSkillService', () => {
  let service: ResumeSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
