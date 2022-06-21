import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';


@NgModule({
  declarations: [TransactionDetailComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TransactionModule { }
