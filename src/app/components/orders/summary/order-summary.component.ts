import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {
  @Input() state: any;
  public ingredientSummary: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.showselectedIngredients();
    localStorage.setItem('orderItem', JSON.stringify(this.ingredientSummary));
  }

  showselectedIngredients() {
    this.ingredientSummary = Object.keys( this.state.ingredients )
    .map( ingredientName => {
        let temp = [];
        temp.push(ingredientName, this.state.ingredients[ingredientName]);
        return temp;
    } )
    .filter(temp => temp[1] > 0);
    localStorage.setItem('price', this.state.totalPrice);
  }

}
