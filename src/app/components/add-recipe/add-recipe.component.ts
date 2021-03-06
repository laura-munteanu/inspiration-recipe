import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NumberValidators } from '../shared/number-validator';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  recipeMessage: string;

  //private validationMessages = { required: 'Please enter a name.' };
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      recipeName: ['', Validators.required],
      category: '',
      cookingTime: '',
      ingredients: ['', Validators.required],
      preparationMode: ['', Validators.required],
      range: ''
    });

    const recipeControl = this.recipeForm.get('recipeName');
    // recipeControl.valueChanges.subscribe(
    //   value => this.setMessage(recipeControl)
    // );
  }
  cancel() {
    this.router.navigate(['home']);
  }
  saveRecipe() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm);
      console.log('Saved: ' + JSON.stringify(this.recipeForm.value));
    }
  }
 
}
