import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemService } from '../services/item-service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage {
  // list items of this category
  public items: any;

  constructor(public nav: NavController, public itemService: ItemService) {
    // get list items
    this.items = itemService.getAll();
  }

  // view a item
  viewItem(itemId) {
    this.nav.navigateForward('item/' + itemId)
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }

  // remove item from wish list
  remove(index) {
    this.items.splice(index, 1);
  }
}
