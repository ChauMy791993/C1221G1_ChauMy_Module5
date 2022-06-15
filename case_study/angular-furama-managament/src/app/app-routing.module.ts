import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {ContractComponent} from './contract-md/contract/contract.component';
import {ContractCreateComponent} from './contract-md/contract-create/contract-create.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {FacilityComponent} from './facility-md/facility/facility.component';
import {FacilityCreateComponent} from './facility-md/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-md/facility-edit/facility-edit.component';


const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'contract', component: ContractComponent},
  // {path: 'contract/create', component: ContractCreateComponent},
  // {path: 'customer' , component: CustomerComponent},
  // {path: 'customer/create' , component: CustomerCreateComponent},
  // {path: 'customer/edit/:customerId', component: CustomerEditComponent},
  // {path: 'facility' , component: FacilityComponent},
  // {path: 'facility/create' , component: FacilityCreateComponent},
  // {path: 'facility/edit/:facilityId' , component: FacilityEditComponent},
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
