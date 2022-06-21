import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TransactionListComponent} from './transaction/transaction-list/transaction-list.component';
import {TransactionEditComponent} from './transaction/transaction-edit/transaction-edit.component';
import {TransactionCreateComponent} from './transaction/transaction-create/transaction-create.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StationListComponent } from './station/station-list/station-list.component';
import { StationCreateComponent } from './station/station-create/station-create.component';
import { StationDetailComponent } from './station/station-detail/station-detail.component';
import { StationEditComponent } from './station/station-edit/station-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionEditComponent,
    TransactionCreateComponent,
    StationListComponent,
    StationCreateComponent,
    StationDetailComponent,
    StationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
