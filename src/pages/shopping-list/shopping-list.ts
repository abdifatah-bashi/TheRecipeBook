import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../model/Ingredient';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  listItems: Ingredient[];
  constructor(private service: ShoppingListService){}

 onAddItem(form: NgForm){
  this.service.addItem(form.value.ingredientName, form.value.amount);
  form.reset();
  this.loadItems();
   
 }

 ionViewWillEnter(){
   this.loadItems();
 }
 onCheckItem(index: number){
   this.service.removeItem(index);
   this.loadItems();
 }

 private loadItems(){
   this.listItems = this.service.getItems();
 }

}
