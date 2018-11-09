import { Component, OnInit } from '@angular/core';
import { NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { text } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  mode: string = "New";
  selectOptions = ["Easy", "Medium", "Hard"];
  recipeForm: FormGroup;


  constructor(public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }

  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingredients': new FormArray([])
    });
  }

  onManageingredients(){
    this.presentActionSheet();
  }

  onSubmit(){
    console.log(this.recipeForm);
    
  }

 private presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
          this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove All Ingredients',
          role: 'destructive',
          handler: () => {
           const fArray: FormArray = (<FormArray> this.recipeForm.get('ingredients'));
           const lenght = fArray.length;
           if(lenght > 0 ){
             for( let i =lenght-1; i>=0; i--){
               fArray.removeAt(i);
             }
           }
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  private createNewIngredientAlert(){
    return this.alertCtrl.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ] , 
      buttons: [
        {
          text: 'cancel',
        role: 'cancel'
        },
        {
          text: 'Add', 
          handler: data=> {
            if(data.name.trim()== '' || data.name == null){
                return;
            }
            (<FormArray> this.recipeForm.get('ingredients')).push(
              new FormControl(data.name, Validators.required));
          }
        }
        
      ]
    });
  }
}


 

