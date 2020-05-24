import { TestBed } from '@angular/core/testing';

import { GestionPalabraService } from './gestion-palabra.service';

describe('GestionPalabraService', () => {
  let service: GestionPalabraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPalabraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
