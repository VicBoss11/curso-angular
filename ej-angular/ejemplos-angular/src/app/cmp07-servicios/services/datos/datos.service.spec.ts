import { TestBed } from '@angular/core/testing';

import { DatosService } from 'src/app/cmp07-servicios/services/datos/datos.service';

describe('DatosService', () => {
  let service: DatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
