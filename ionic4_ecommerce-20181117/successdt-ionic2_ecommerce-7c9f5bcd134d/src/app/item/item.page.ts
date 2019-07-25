import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ItemService } from '../services/item-service';
import { ModalFilterOptionPage } from '../modal-filter-option/modal-filter-option.page';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage {
  // item info
  public item: any;

  constructor(public nav: NavController, public itemService: ItemService, public modalCtrl: ModalController) {
    // get the first item as sample data
    this.item = itemService.getItem(1);
  }

  ngOnInit() {
  }

  // add or remove item on wish list
  toggleWishList(item) {
    item.on_wish_list = !item.on_wish_list;
  }

  // get item options group name
  getOptionGroupsName(item) {
    let optionGroups = [];
    for (let i = 0; i < item.option_groups.length; i++) {
      optionGroups.push(item.option_groups[i].name);
    }

    return optionGroups.join(',');
  }

  // make array with range is n
  range(n) {
    return new Array(n);
  }

  // open item option modal
  async showOptions(item) {
    // show modal
    let modal = await this.modalCtrl.create({
        component: ModalFilterOptionPage,
        componentProps: {item: item}
      }
    );

    await modal.present();
  }
}
