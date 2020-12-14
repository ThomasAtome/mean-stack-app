import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalesViewComponent} from "./views/sales-view/sales-view.component";
import {SaleCreatorViewComponent} from "./views/sale-creator-view/sale-creator-view.component";
import {SaleEditorViewComponent} from "./views/sale-editor-view/sale-editor-view.component";
import {SaleViewComponent} from "./views/sale-view/sale-view.component";

const routes: Routes = [
  {path:'', component: SalesViewComponent},
  {path:'sales', component: SalesViewComponent},
  {path:'new/sale', component: SaleCreatorViewComponent},
  {path:'edit/sale/:id', component: SaleEditorViewComponent},
  {path:'sale/:id', component: SaleViewComponent},
  {path:'**', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
