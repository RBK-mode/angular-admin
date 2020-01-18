import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesItemComponent } from './components/categories-list/categories-item/categories-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './items-list/item/item.component';

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
export class AppModule { }
