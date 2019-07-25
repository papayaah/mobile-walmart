import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CurrencyConverterPage } from './currency-converter.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyConverterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CurrencyConverterPage]
})
export class CurrencyConverterPageModule {
}
