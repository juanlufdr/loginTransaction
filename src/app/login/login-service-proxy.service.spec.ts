import { TestBed } from '@angular/core/testing';

import { LoginServiceProxyService } from './login-service-proxy.service';

describe('LoginServiceProxyService', () => {
  let service: LoginServiceProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
