import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.page.html',
  styleUrls: ['./order-confirm.page.scss'],
})
export class OrderConfirmPage {
  public cart: any;

  constructor(public nav: NavController, public cartService: CartService) {
    // set cart data
    this.cart = cartService.getAll();
  }

  // place order
  buy() {

    // back to home page
    this.nav.navigateRoot('home');
  }
}
