import { Location } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrderService } from '../orders/list/order.service';



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
  totalPrice: any;
  user: any;
  ingredients: any;


  constructor(
    private location: Location,
    private http: HttpClient,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrderIngredients();
  }

  checkoutContinuedHandler() {
    this.open = true;
  }

  cancel() {
    this.location.back();
  }



  getOrderIngredients() {
    this.orderIngredients = JSON.parse(localStorage.getItem('data'));
    this.totalPrice = JSON.parse(localStorage.getItem('price'));
    this.ingredients = JSON.parse(localStorage.getItem('orderItem') || '[]');
    const main1 = localStorage.getItem('userId');
    this.user = main1.replace(/['"]+/g, '');
    console.log(this.ingredients, 'onnnnnceeeeee');
  }

  onSubmit() {

    this.orderService.saveOrder(this.totalPrice, this.ingredients, this.user).subscribe(
      resData => {
        console.log(resData, 'oreddrData');
        this.router.navigate(['/orders']);
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }
}
