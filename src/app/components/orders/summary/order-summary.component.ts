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
    console.log('morrrn', this.state.ingredientsPrice);
  }

  // ngOnChanges(changes) {
  //   console.log('changes===');
  //   console.log(changes);
  // }

  ngDoCheck() {
    this.showselectedIngredients();
  }

  showselectedIngredients() {
    this.ingredientSummary = Object.keys( this.state.ingredients )
    .map( ingredientName => {
        let temp = [];
        temp.push(ingredientName, this.state.ingredients[ingredientName]);
        return temp;
    } )
    .filter(temp => temp[1] > 0);
    console.log('oloooo', this.ingredientSummary);
  }

}
