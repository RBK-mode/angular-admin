import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ApprovalPageComponent } from './pages/approval-page/approval-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerPageComponent,
    OrdersPageComponent,
    ApprovalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
