import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes ,RouterModule } from '@angular/router';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { CategoriesBtnsComponent } from './components/';

const routes: Routes =[
  {path: '', component: MainPageComponent},
  {path: 'user', component: CustomerPageComponent}
]

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, CustomerPageComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
     RouterModule.forRoot(routes)
],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
