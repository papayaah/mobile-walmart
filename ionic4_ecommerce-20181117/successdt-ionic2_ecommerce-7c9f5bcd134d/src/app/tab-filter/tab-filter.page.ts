import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab-filter',
  templateUrl: './tab-filter.page.html',
  styleUrls: ['./tab-filter.page.scss'],
})
export class TabFilterPage {

  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  // close modal
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
