import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesItemComponent } from './categories-list/categories-item/categories-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoriesItemComponent    
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
export class AppModule { }
