import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesViewComponent } from './views/sales-view/sales-view.component';
import {SaleService} from './services/sale/sale.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { SaleCreatorViewComponent } from './views/sale-creator-view/sale-creator-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SaleEditorViewComponent } from './views/sale-editor-view/sale-editor-view.component';
import { SaleViewComponent } from './views/sale-view/sale-view.component';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/guards/auth/auth-guard.service';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { RegisterViewComponent } from './views/register-view/register-view.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesViewComponent,
    SaleCreatorViewComponent,
    SaleEditorViewComponent,
    SaleViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SaleService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
