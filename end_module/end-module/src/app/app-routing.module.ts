import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(module => module.TransactionModule)
  },
  {
    path: 'station',
    loadChildren: () => import('./station/station.module').then(module => module.StationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
