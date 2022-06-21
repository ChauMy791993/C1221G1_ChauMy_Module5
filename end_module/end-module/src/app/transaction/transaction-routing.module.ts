import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionEditComponent} from './transaction-edit/transaction-edit.component';
import {TransactionCreateComponent} from './transaction-create/transaction-create.component';
import {TransactionDetailComponent} from './transaction-detail/transaction-detail.component';


const routes: Routes = [
  {path: 'transaction-list', component: TransactionListComponent},
  {path: 'transaction-edit/:id', component: TransactionEditComponent},
  {path: 'transaction-create', component: TransactionCreateComponent},
  {path: 'transaction-detail/:id', component: TransactionDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
