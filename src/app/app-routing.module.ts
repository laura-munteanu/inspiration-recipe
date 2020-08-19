import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{
  BreakfastComponent,
  HomeComponent,
  RecipeDetailsComponent,
  AddRecipeComponent,
  ContactFormComponent,
} from './components/index';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent 
  },
  {
    path: 'breakfast', component: BreakfastComponent 
  },
  {
    path: 'recipe/:id', component: RecipeDetailsComponent
  },
  {
    path: 'add-recipe', component: AddRecipeComponent
  },
  {
    path: 'contact', component: ContactFormComponent
  },
 {
   path: '', redirectTo: '/home', pathMatch: 'full'
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
