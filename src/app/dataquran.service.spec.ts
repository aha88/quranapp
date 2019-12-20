import { TestBed } from '@angular/core/testing';

import { DataquranService } from './dataquran.service';

describe('DataquranService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataquranService = TestBed.get(DataquranService);
    expect(service).toBeTruthy();
  });
});
