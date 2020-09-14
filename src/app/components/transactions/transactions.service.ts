import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionI } from 'src/app/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  baseUrl: string = `https://us-central1-code-challenge-e9f47.cloudfunctions.net/app`;

  constructor(private httpClient: HttpClient) { }


  getTransactionsList(orderMode?: string) {
    return this.httpClient.get(`${this.baseUrl}/transactions?sort=${orderMode}`);
  }

  getTransactionsListFiltered(description: string) {
    return this.httpClient.get(`${this.baseUrl}/transactions?desc=${description}`);
  }
}
