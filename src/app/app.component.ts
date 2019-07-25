import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar) {
    this.initializeApp();
  }

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'ios-home'
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'ios-list-box'
    },
    {
      title: 'WishList',
      url: '/wish-list',
      icon: 'md-heart'
    },
    {
      title: 'My Order',
      url: '/my-order',
      icon: 'ios-timer'
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'ios-cart'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'ios-settings'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
