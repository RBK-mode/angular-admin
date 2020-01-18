import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { CategoriesItemComponent } from "./categories-list/categories-item/categories-item.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { ItemComponent } from "./components/items-list/item/item.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Routes, RouterModule } from "@angular/router";
import { CustomerPageComponent } from "./pages/customer-page/customer-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { CategoriesBtnsComponent } from "../app/components/categories-btns/categories-btns.component";
import { MenuGroupBtnsComponent } from "./components/items-list/menu-group-btns/menu-group-btns.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "login", component: LoginComponent },
  { path: "user", component: CustomerPageComponent },
  { path: "items", component: ItemsListComponent, data: { form: false } },
  { path: "addItem", component: ItemsListComponent, data: { form: true } }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoriesItemComponent,
    ItemsListComponent,
    ItemComponent,
    NavbarComponent,
    FooterComponent,
    CustomerPageComponent,
    MainPageComponent,
    CategoriesBtnsComponent,
    MenuGroupBtnsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
