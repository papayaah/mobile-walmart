import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController) {
  }

  ngOnInit() {
  }

  // go to register page
  register() {
    this.nav.navigateForward('register');
  }

  // go to home page
  login() {
    this.nav.navigateRoot('home');
  }

  // go to forgot password page
  forgotPwd() {
    this.nav.navigateForward('forgot-password');
  }
}
