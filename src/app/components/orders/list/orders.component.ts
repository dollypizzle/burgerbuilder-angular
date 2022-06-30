import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: any = [];


  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.orderService.getAll().subscribe(
        res => {
          for (const key in res) {
          this.orders.push({...res[key], id: key });
        }
      }
      );
    }

    objectValues(obj) {
      return Object.values(obj);
    }

}
