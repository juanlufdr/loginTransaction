import { NgModule } from '@angular/core';
import { TransactionsComponent } from './transactions.component';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsService } from './transactions.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [TransactionsComponent],
    imports: [
        MaterialModule,
        CommonModule, 
        TransactionsRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [TransactionsService],
})
export class TransactionsModule { }
