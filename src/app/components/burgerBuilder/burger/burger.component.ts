import { Ingredient } from './../../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  state: any = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    ingredientsPrice: {
      salad: 0.5,
      meat: 0.3,
      cheese: 0.6,
      bacon: 1.0
    },
    totalPrice: 4,
    purchasable: false
  };
  addedIngredients: any;

  constructor() {
   }

  ngOnInit(): void {
    const localState = JSON.parse(localStorage.getItem('data'));

    this.state = localState ? localState : this.state;
    this.getAddedIngredients();
  }

  getAddedIngredients() {
    this.addedIngredients = Object.keys( this.state.ingredients )
      .map( ingredientName => {
          return [...Array( this.state.ingredients[ingredientName] )].map( ( v, i ) => {
              return ingredientName;
          } );
        } )
        .reduce((prev, current) => {
          return prev.concat(current);
        }, []);
        localStorage.setItem('orderData', JSON.stringify(this.addedIngredients));
      }

  updateStateOutputCallback(event: any) {
    this.state = event.state;
    this.getAddedIngredients();
    localStorage.setItem('data', JSON.stringify(this.state));
  }

}
