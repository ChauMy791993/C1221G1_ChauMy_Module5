import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductCreateComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
