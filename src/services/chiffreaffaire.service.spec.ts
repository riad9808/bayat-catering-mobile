import { TestBed } from '@angular/core/testing';

import { ChiffreaffaireService } from './chiffreaffaire.service';

describe('ChiffreaffaireService', () => {
  let service: ChiffreaffaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiffreaffaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
