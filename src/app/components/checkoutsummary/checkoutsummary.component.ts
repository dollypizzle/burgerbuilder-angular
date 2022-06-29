import { Location } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkoutsummary',
  templateUrl: './checkoutsummary.component.html',
  styleUrls: ['./checkoutsummary.component.css']
})
export class CheckoutsummaryComponent implements OnInit {
  open = false;
  @Input() state: any;
  @ViewChild('f', { static: false }) slForm: NgForm;
  public orderIngredients: any;


  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    // console.log('morrrn', this.state.ingredients);
  }

  // ngOnInit(): void {
  //   this.state.ingredients = {
  //     'salad': 0,
  //     'tomato': 0,
  //     'cheese': 0,
  //     // "onion": 0,
  //     'egg': 0
  //   };
  //   this.state.ingredientsPrice = {
  //     salad: 0.5,
  //     tomato: 0.3,
  //     cheese: 0.6,
  //     // onion: 0.4,
  //     egg: 1.0
  //   };

  //   this.getOrderIngredients();
  // }

  checkoutContinuedHandler() {
    this.open = true;
  }

  cancel() {
    this.location.back();
  }

  // ngDoCheck(): void {
  //   this.getOrderIngredients();
  // }

  // getOrderIngredients() {
  //   this.orderIngredients = Object.keys( this.state.ingredients )
  //   .map( ingredientName => {
  //     let temp = [];
  //     temp.push(ingredientName, this.state.ingredients[ingredientName]);
  //     return temp;
  //   } )
  //  .filter(temp => temp[1] > 0);
  // }
  // // console.log('pushnanan', this.orderIngredients);

  // Get value from output
  // updateStateOutputCallback(event: any) {
  //   this.state = event.state;
  //   this.getAddedIngredients();
  // }

}
