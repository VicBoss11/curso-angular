import { TestBed } from '@angular/core/testing';

import { PagosService } from 'src/app/cmp08-observables/services/pagos/pagos.service';

describe('PagosService', () => {
  let service: PagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
