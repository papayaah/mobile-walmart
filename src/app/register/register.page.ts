import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public nav: NavController) {
  }

  ngOnInit() {
  }

  // go to login page
  login() {
    this.nav.navigateForward('login');
  }

  // go to home page
  register() {
    this.nav.navigateRoot('home');
  }
}
