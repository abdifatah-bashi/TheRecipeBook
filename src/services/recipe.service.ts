import { Recipe } from "../model/recipe";
import { Ingredient } from "../model/Ingredient";

import { OnInit } from "@angular/core";

export class RecipeService {
    private recipes: Recipe[] = [];
   

    addRecipe(
        title: string, 
        description: string, 
        difficulty: string, 
        ingredients: Ingredient[]){
            this.recipes.push(new Recipe(title, description, difficulty, ingredients));
            console.log("after add: " + this.recipes);
            

    }

    getRecipes(){
        return this.recipes.slice();
      
        
    }

    updateRecipe(index:  number,
                 title: string, 
                 description: string, 
                 difficulty: string, 
                 ingredients: Ingredient[] ){
                     this.recipes[index]= new Recipe(title, description, difficulty, ingredients); 
                    }
    removeRecipe(index: number ){
        this.recipes.splice(index, 1 );
    }


}