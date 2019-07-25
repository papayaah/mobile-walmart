import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {

  // list of categories
  public categories: any;

  constructor(public nav: NavController, public categoryService: CategoryService) {
    this.categories = categoryService.getAll();
  }

  // view category
  viewCategory(categoryId) {
    this.nav.navigateForward('category/' + categoryId);
  }

  // view cart
  goToCart() {
    this.nav.navigateRoot('cart');
  }
}
