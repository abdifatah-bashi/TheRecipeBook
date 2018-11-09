import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage  implements OnInit {
  recipes: Recipe[] = [];

  constructor(public navCtrl: NavController,
              public recipeService: RecipeService) {
  }

 

  ngOnInit(){
    
      
  }

  ionViewWillEnter(){
    console.log("called ionWillEnter");
    
      this.recipes = this.recipeService.getRecipes();
      console.log(this.recipes);

  }


  onNewRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: "New"});
  }

}
