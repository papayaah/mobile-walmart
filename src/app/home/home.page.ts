import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoryService } from '../services/category-service';
import { ItemService } from '../services/item-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // list slides for slider
  public slides = [
    {
      src: 'assets/img/slide_1.jpg'
    },
    {
      src: 'assets/img/slide_2.jpg'
    },
    {
      src: 'assets/img/slide_3.jpg'
    }
  ];

  // list categories
  public categories: any;

  // list of items
  public items: any;

  constructor(public nav: NavController, public categoryService: CategoryService, public itemService: ItemService) {
    this.categories = categoryService.getAll();

    //this.items = itemService.getAll();
    itemService.getProducts()
      .subscribe(data => {
        this.items = data.products
    })
  }

  // view categories
  viewCategories() {
    this.nav.navigateForward('categories');
  }

  // view a category
  viewCategory(catId) {
    this.nav.navigateForward('category/' + catId);
  }

  // view a item
  viewItem(itemId) {
    this.nav.navigateForward('item/' + itemId)
  }

  // go to search page
  goToSearch() {
    this.nav.navigateForward('search');
  }

  // view cart
  goToCart() {
    this.nav.navigateRoot('cart');
  }
}
