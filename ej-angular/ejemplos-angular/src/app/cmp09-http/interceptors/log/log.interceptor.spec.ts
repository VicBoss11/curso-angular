import { TestBed } from '@angular/core/testing';

import { LogInterceptor } from 'src/app/cmp09-http/interceptors/log/log.interceptor';

describe('LogInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LogInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LogInterceptor = TestBed.inject(LogInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
