import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular/dist';
import { ItemService } from '../services/item-service';
import { CategoryService } from '../services/category-service';
import { TabFilterPage } from '../tab-filter/tab-filter.page';
import { TabAttributePage } from '../tab-attribute/tab-attribute.page';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {

  // list items of this category
  public items: any;

  // category info
  public category: any;

  // view type
  public viewType = 'list';

  // sort by
  public sortBy = 'Best Match';

  constructor(public nav: NavController, public itemService: ItemService, public categoryService: CategoryService,
              public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {
    // get list items of a category as sample
    this.items = itemService.getByCategory(1);

    // set category info
    this.category = categoryService.getItem(1);
  }

  // switch to list view
  viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }

  // choose sort by
  async chooseSortBy() {
    let actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Best Match',
          handler: () => {
            this.sortBy = 'Best Match';
          }
        },
        {
          text: 'Lowest Price First',
          handler: () => {
            this.sortBy = 'Lowest Price First';
          }
        },
        {
          text: 'Highest Price First',
          handler: () => {
            this.sortBy = 'Highest Price First';
          }
        },
        {
          text: 'No. of orders',
          handler: () => {
            this.sortBy = 'No. of orders';
          }
        },
        {
          text: 'Seller Rating',
          handler: () => {
            this.sortBy = 'Seller Rating';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  // show filter modal
  async openFilter() {
    // show modal
    let modal = await this.modalCtrl.create({
      component: TabFilterPage
    });

    await modal.present();
  }

  // show attribute modal
  async openAttr() {
    // show modal
    let modal = await this.modalCtrl.create({
      component: TabAttributePage
    });

    await modal.present();
  }

  // view a item
  viewItem(itemId) {
    this.nav.navigateForward('item/' + itemId)
  }

  // view cart
  goToCart() {
    this.nav.navigateRoot('cart');
  }
}
