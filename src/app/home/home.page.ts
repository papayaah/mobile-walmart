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
  public categories: any = [];

  // list of items
  public items: any;

  constructor(public nav: NavController, public categoryService: CategoryService, public itemService: ItemService) {
    itemService.getProducts()
      .subscribe( (data: any) => {
        this.items = data.products
      })

    categoryService.getAll()
      .subscribe( (data: any) => {
        // pull the categories out
        const modules = data.modules
        modules.forEach(m => {
          if(!m.configs.products) return

          this.categories.push({
            id: m.matchedTrigger.pageId,
            name: m.configs.title,
            thumb: m.configs.products[0].basic.image.thumbnail
          })
        })
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
