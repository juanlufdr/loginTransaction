import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TransactionsService]
    });
    service = TestBed.inject(TransactionsService);
    spyOn(service, 'getTransactionsList').and.callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should have the correct base url api', async(() => {
    const service: TransactionsService = TestBed.get(TransactionsService);
    //spy = spyOn(service, 'login').and.callFake(() => {autToken: 'aa/*  */bbccdd'});
    expect(service.baseUrl).toBe('https://us-central1-code-challenge-e9f47.cloudfunctions.net/app');
  }));
});
