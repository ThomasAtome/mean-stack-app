import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalesViewComponent} from "./views/sales-view/sales-view.component";
import {SaleCreatorViewComponent} from "./views/sale-creator-view/sale-creator-view.component";

const routes: Routes = [
  {path:'', component: SalesViewComponent},
  {path:'sales', component: SalesViewComponent},
  {path:'new/sale', component: SaleCreatorViewComponent},
  {path:'**', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
