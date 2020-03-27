import { TestBed } from '@angular/core/testing';

import { CivilizationsService } from './civilizations.service';

describe('CivilizationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CivilizationsService = TestBed.get(CivilizationsService);
    expect(service).toBeTruthy();
  });
});
