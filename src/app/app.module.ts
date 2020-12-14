import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesViewComponent } from './views/sales-view/sales-view.component';
import {SaleService} from "./services/sale/sale.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { SaleCreatorViewComponent } from './views/sale-creator-view/sale-creator-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SalesViewComponent,
    SaleCreatorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
