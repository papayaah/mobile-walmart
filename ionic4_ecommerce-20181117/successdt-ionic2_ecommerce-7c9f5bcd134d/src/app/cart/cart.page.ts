import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  public cart: any;

  constructor(public nav: NavController, public cartService: CartService) {
    // set cart data
    this.cart = cartService.getAll();
  }

  // remove item
  remove(itemIndex, sellerIndex) {
    this.cart.sellers[sellerIndex].items.splice(itemIndex, 1);
  }

  // place order
  buy() {
    this.nav.navigateForward('order-confirm');
  }
}
