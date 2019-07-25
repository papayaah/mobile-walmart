import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab-attribute',
  templateUrl: './tab-attribute.page.html',
  styleUrls: ['./tab-attribute.page.scss'],
})
export class TabAttributePage {

  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  // close modal
  closeModal() {
    this.modalCtrl.dismiss();
  }

}
