import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(public nav: NavController) {
  }

  ngOnInit() {
  }

  // go to changing password page
  changePassword() {
    this.nav.navigateForward('change-password');
  }
}
