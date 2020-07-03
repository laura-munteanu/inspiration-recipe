import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';
import { Recipe } from '../recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes():Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl)
    .pipe(catchError(this.handleError<Recipe[]>('getRecipes')));
  }
  
  getRecipe(id: number): Observable < Recipe > {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Recipe>(url);
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
