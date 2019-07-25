import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { ItemService } from '../services/item-service';

@Component({
  selector: 'app-modal-filter-option',
  templateUrl: './modal-filter-option.page.html',
  styleUrls: ['./modal-filter-option.page.scss'],
})
export class ModalFilterOptionPage {
  // current item
  public item: any;

  constructor(public nav: NavController, public itemService: ItemService, public modalCtrl: ModalController,
              public toastCtrl: ToastController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.item.option_price = 0;
  }

  ngOnInit() {
  }

  // choose a option
  chooseOption(optionGroup, option) {
    for (let i = 0; i < optionGroup.options.length; i++) {
      optionGroup.options[i].active = false;
    }

    option.active = true;
    optionGroup.currentOption = option;

    // recalculate price
    this.calculatePrice();
  }

  // calculate item price
  calculatePrice() {
    this.item.option_price = 0;
    for (let i = 0; i < this.item.option_groups.length; i++) {
      if (this.item.option_groups[i].currentOption)
        this.item.option_price += this.item.option_groups[i].currentOption.price;
    }
  }

  // add to card
  async addCart(item) {
    let toast = await this.toastCtrl.create({
      message: 'Item added to card',
      duration: 500,
      position: 'middle'
    });

    await toast.present();
  }

  // buy now
  buy(item) {
    this.modalCtrl.dismiss();

  }

  // close modal
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
