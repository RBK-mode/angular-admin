import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Routes, RouterModule } from "@angular/router";
import { CustomerPageComponent } from "./pages/customer-page/customer-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { CategoriesBtnsComponent } from "../app/components/categories-btns/categories-btns.component";
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ApprovalPageComponent } from './pages/approval-page/approval-page.component';
import { HttpService } from './http.service';
import { DeninedPageComponent } from './pages/denined-page/denined-page.component';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "user", component: CustomerPageComponent },
  { path: "requests", component: ApprovalPageComponent },
  { path: "orders", component: OrdersPageComponent },
  { path: "approved", component: ApprovalPageComponent },
  { path: "denied", component: DeninedPageComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustomerPageComponent,
    MainPageComponent,
    CategoriesBtnsComponent,
    ApprovalPageComponent,
    OrdersPageComponent,
    DeninedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
