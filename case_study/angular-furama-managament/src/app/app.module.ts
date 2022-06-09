import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FacilityComponent} from './facility/facility.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {ContractComponent} from './contract/contract.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ContractCreateComponent } from './contract-create/contract-create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract/create', component: ContractCreateComponent},
  {path: 'customer' , component: CustomerComponent},
  {path: 'customer/create' , component: CustomerCreateComponent},
  {path: 'customer/edit/:customerId', component: CustomerEditComponent},
  {path: 'facility' , component: FacilityComponent},
  {path: 'facility/create' , component: FacilityCreateComponent},
  {path: 'facility/edit/:facilityId' , component: FacilityEditComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FacilityComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractComponent,
    HomeComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
