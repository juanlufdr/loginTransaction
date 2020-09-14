import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { TransactionI } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  data: TransactionI[] = [];
  displayedColumns: string[] = ['id', 'date', 'amount', 'fee', 'description', 'userId'];
  selected: string = 'desc';
  loading: boolean = true;
  searchText: string = '';
  constructor(private transacService: TransactionsService) { }

  ngOnInit(): void {
    this.getTransactionList('desc');
  }

  getTransactionList(type){
    this.selected = type;
    this.transacService.getTransactionsList(type).subscribe(
      (data: TransactionI[]) => {
        this.data = data;
        this.loading = false;
      }
    )
  }

  searchByDescription() {
    this.transacService.getTransactionsListFiltered(this.searchText).subscribe(
      (data: TransactionI[]) => {
        this.data = data;
        this.loading = false;
      }
    )  }

  onSelect() {
    this.loading = true;
    this.transacService.getTransactionsList(this.selected).subscribe(
      (data: TransactionI[]) => {
        this.data = data;
        this.loading = false;
      }
    )
  }

}
