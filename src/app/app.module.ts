import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";
import { CategoriesItemComponent } from "./components/categories-list/categories-item/categories-item.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemsListComponent } from "./items-list/items-list.component";
import { ItemComponent } from "./items-list/item/item.component";
import { Routes } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { CustomerPageComponent } from "./pages/customer-page/customer-page.component";
import { ApprovalPageComponent } from "./pages/approval-page/approval-page.component";
import { OrdersPageComponent } from "./pages/orders-page/orders-page.component";
import { DeninedPageComponent } from "./pages/denined-page/denined-page.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginComponent },
  { path: "user", component: CustomerPageComponent },
  { path: "requests", component: ApprovalPageComponent },
  { path: "items", component: ItemsListComponent, data: { form: false } },
  { path: "addItem", component: ItemsListComponent, data: { form: true } },
  { path: "orders", component: OrdersPageComponent },
  { path: "approved", component: ApprovalPageComponent },
  { path: "denied", component: DeninedPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoriesItemComponent,
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
