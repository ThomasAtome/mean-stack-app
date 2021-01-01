import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SalesViewComponent} from './views/sales-view/sales-view.component';
import {SaleCreatorViewComponent} from './views/sale-creator-view/sale-creator-view.component';
import {SaleEditorViewComponent} from './views/sale-editor-view/sale-editor-view.component';
import {SaleViewComponent} from './views/sale-view/sale-view.component';
import {LoginViewComponent} from './views/login-view/login-view.component';
import {AuthGuardService} from './services/guards/auth/auth-guard.service';
import {RegisterViewComponent} from './views/register-view/register-view.component';

const routes: Routes = [
  {path: '', component: LoginViewComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'register', component: RegisterViewComponent},
  {path: 'sales', canActivate: [AuthGuardService], component: SalesViewComponent},
  {path: 'new/sale', canActivate: [AuthGuardService], component: SaleCreatorViewComponent},
  {path: 'edit/sale/:id', canActivate: [AuthGuardService], component: SaleEditorViewComponent},
  {path: 'sale/:id', canActivate: [AuthGuardService], component: SaleViewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
