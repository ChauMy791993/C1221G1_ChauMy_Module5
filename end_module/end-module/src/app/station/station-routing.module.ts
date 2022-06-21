import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StationListComponent} from './station-list/station-list.component';
import {StationEditComponent} from './station-edit/station-edit.component';
import {StationCreateComponent} from './station-create/station-create.component';
import {StationDetailComponent} from './station-detail/station-detail.component';


const routes: Routes = [
  {path: 'station-list', component: StationListComponent},
  {path: 'station-edit/:id', component: StationEditComponent},
  {path: 'station-create', component: StationCreateComponent},
  {path: 'station-detail/:id', component: StationDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationRoutingModule { }
