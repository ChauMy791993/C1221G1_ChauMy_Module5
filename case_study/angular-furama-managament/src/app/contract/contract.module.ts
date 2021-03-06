import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ContractListComponent,
  ContractCreateComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    ContractRoutingModule,
    HttpClientModule
  ]
})
export class ContractModule { }
