import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import {TransactionRoutingModule} from '../transaction/transaction-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StationRoutingModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class StationModule { }
