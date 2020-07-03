import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  public recipe: Recipe;
  public recipes: Recipe[];
  

  constructor(private recipeService: RecipeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.recipeService.getRecipe(id).subscribe(
        response => {
          this.recipe=response;
        }
      );
   });

   this.recipeService.getRecipes().subscribe(
    response => {
      this.recipes=response;
    }
  );
    }
}
