import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NumberValidators } from './components/shared/number-validator';        
import { RecipeData } from './components/recipe-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from './components/shared/recipe.service'

import { 
  NavbarComponent,
  BreakfastComponent,
  HomeComponent,
  RecipeThumbnailComponent,
  RecipeDetailsComponent,
  AddRecipeComponent

} from './components/index';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreakfastComponent,
    HomeComponent,
    RecipeThumbnailComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(RecipeData, {delay: 1000})
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
