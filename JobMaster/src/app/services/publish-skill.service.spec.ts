import { TestBed } from '@angular/core/testing';

import { PublishSkillService } from './publish-skill.service';

describe('PublishSkillService', () => {
  let service: PublishSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
