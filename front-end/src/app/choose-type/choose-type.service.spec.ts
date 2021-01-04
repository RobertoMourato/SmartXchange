import { TestBed } from '@angular/core/testing';

import { ChooseTypeService } from './choose-type.service';

describe('ChooseTypeService', () => {
  let service: ChooseTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
