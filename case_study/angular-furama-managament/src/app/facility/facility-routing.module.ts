import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';


const routes: Routes = [
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-edit/:id', component: FacilityEditComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
