import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LoginServiceProxyService } from './login-service-proxy.service';

describe('LoginServiceProxyService', () => {
  let service: LoginServiceProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [LoginServiceProxyService]
    });
    service = TestBed.inject(LoginServiceProxyService);
    spyOn(service, 'login').and.returnValue(of({authToken: 'sjjnfasdf'}));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('login function should return token', async(() => {
    const service: LoginServiceProxyService = TestBed.get(LoginServiceProxyService);
    service.login({username: 'user', password: 'pass'}).subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));
});
