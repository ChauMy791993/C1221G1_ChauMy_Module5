import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FacilityComponent} from './facility-md/facility/facility.component';
import {FacilityCreateComponent} from './facility-md/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-md/facility-edit/facility-edit.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractComponent} from './contract-md/contract/contract.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ContractCreateComponent } from './contract-md/contract-create/contract-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {CustomerListComponent } from './customer/customer-list/customer-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FacilityComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractComponent,
    HomeComponent,
    ContractCreateComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
