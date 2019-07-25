import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OrderService } from '../services/order-service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage {
  // sample data
  public orders: any;

  constructor(public nav: NavController, public orderService: OrderService) {
    // set sample data
    this.orders = orderService.getAll();
  }
}
