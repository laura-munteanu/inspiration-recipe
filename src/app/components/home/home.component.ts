import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string;
  public recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.title = 'Inspiration-recipes';
    this.recipeService.getRecipes().subscribe(
      response => {
        this.recipes=response;
      }
    );


  }
  
}
