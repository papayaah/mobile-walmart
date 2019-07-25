import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalFilterOptionPage } from './modal-filter-option.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFilterOptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalFilterOptionPage]
})
export class ModalFilterOptionPageModule {
}
